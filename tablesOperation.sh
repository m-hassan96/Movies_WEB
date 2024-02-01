PS3="- Please choose an option: "
echo '-----------------------------------------'

echo -e " - What you want to do in $1:- \n"
select action in 'Create Table' 'List Tables' 'Drop Table' 'Insert into Table' 'Select From Table' 'Delete From Table' 'Update Table' 'Main Menu' 'Exit'; do
	case $action in
	'Create Table')
		. ./createTable.sh
		;;
	'List Tables')
		. ./listTable.sh
		;;
	'Drop Table')
		. ./dropTable.sh
		;;
	'Insert into Table')
		. ./insertRecord.sh
		;;
	'Select From Table')
		. ./listTable.sh
		. ./selectRecord.sh
		;;
	'Delete From Table')
		. ./deleteRecord.sh
		;;
	'Update Table')
		. ./updateRecord.sh
		;;
	'Main Menu')
		cd ../..
		. ./startView.sh
		;;
	'Exit')
		. ./exitScript.sh
		;;
	*)
		echo "Incorect answer, Redirecting to main menu.."
		cd ../..
		sleep 2
		. ./startView.sh
		;;
	esac
done
