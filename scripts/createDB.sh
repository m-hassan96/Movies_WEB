ps3=" Choose an option"
echo "-----------------------------"
echo -e $' - Enter the name of the DB: \c'
read database

if ! [[ -d ./mydb/$database ]]
then
    mkdir -p ./mydb/$database
	echo $'\t'    
    echo " >> $database  << created ... Done  "
	echo $'\t'    
    . ./startView.sh
else
        echo " << The $database is already exist >> "
fi