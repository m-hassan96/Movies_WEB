# Delete Record steps
# 1. list all records => PK
# 2. check PK to delete its record
# [ file => copyFile 		]
# | clear file				|
# [ copyFile =Filter=> file	]

	. ./scripts/listTable.sh $database

echo -e " - Please enter table name to delete from: \c"
read table_name

if [[ -f ./mydb/$database/$table_name ]]; then
	awk 'BEGIN{FS=";"}{
		if (NR==1) 
		{
			for(i=1;i<=NF;i++){
				printf "--|--"$i
			}{
				print "--|"
			}
		}
	}' ./mydb/$database/$table_name

	echo -e " - Enter Column name: \c"
	read field

	## get the field number
	findex=$(awk 'BEGIN{FS=";"}{
		if(NR==1)
		{
			for(i=1;i<=NF;i++){
				if($i=="'$field'") 
				print i 
			}
		}
	}' ./mydb/$database/$table_name)
echo $findex 

	if [[ $findex == "" ]]; then
		echo " << Not Found >> "
		./scripts/tablesOperation.sh

	else
		echo -e " - Enter Value: \c"
		read value

		res=$(awk 'BEGIN{FS=";"}{
			if ($'$findex'=="'$value'")
			 	print $'$findex'
			 }' ./mydb/$database/$table_name 2>>/dev/null)

		if [[ $res == "" ]]; then
			echo "Value Not Found"
			./scripts/tablesOperation.sh
		else
			# get the record number to be deleted
			NR=$(awk 'BEGIN{FS=";"}{
				if ($'$findex'=="'$value'") 
					print NR
				}' ./mydb/$database/$table_name 2>>/dev/null)

			sed -i ''$NR'd' ./mydb/$database/$table_name 2>>/dev/null

			echo " << Row  Deleted Successfully >> "
			./scripts/tablesOperation.sh
		fi
	fi
else
	echo " << Table doesn't exist ! >>"
fi
