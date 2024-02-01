source ./listDB.sh			
echo -e $'Enter DB name to be deleted:\c'
	read database
	if [[ -d ./mydb/$database ]]
        then
	      rm -r ./mydb/$database
	      echo "$database removed ... Done"
          ./startView.sh
	else 
	      echo "No matching name"	
		
	fi	