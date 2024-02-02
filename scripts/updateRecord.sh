echo "Enter Table Name:"
	read table
	awk 'BEGIN{FS=";"}{if (NR==1) {for(i=1;i<=NF;i++){printf "--|--"$i}{print "--|"}}}' $table
	echo "Enter Column name: "
	read field
	findex=$(awk 'BEGIN{FS=";"}{if(NR==1){for(i=1;i<=NF;i++){if($i=="'$field'") print i }}}' $table )
	if [[ $findex == "" ]]
	then
		echo "Not Found"
		tablesOperation
	else
		echo "Enter Value:"
		read value
		result=$(awk 'BEGIN{FS=";"}{if ($'$findex'=="'$value'") print $'$findex'}' $table 2>> /dev/null)
		if [[ $result == "" ]]
		then
		echo "Value Not Found"
		tablesOperation
		else
			echo "Enter new Value to set:"
			read newValue
			NR=$(awk 'BEGIN{FS=";"}{if ($'$findex' == "'$value'") print NR}' $table 2>> /dev/null)
			echo $NR
			oldValue=$(awk 'BEGIN{FS=";"}{if(NR=='$NR'){for(i=1;i<=NF;i++){if(i=='$findex') print $i}}}' $table 2>> /dev/null)
			echo $oldValue
			sed -i ''$NR's/'$oldValue'/'$newValue'/g' $table 2>> /dev/null
			echo "Row Updated Successfully"
			tablesOperation
		fi
	fi