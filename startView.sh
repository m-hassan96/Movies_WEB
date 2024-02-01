
# Choosing an option ( Home page / Starting menu )
PS3='- Choose an option >> '

echo "-----------------------------"    
echo $'\n << Welcome to our DBMS >>\n'

echo $'<< We love linux ^_^  >>\n'
	select menu in 'Create DB' 'List DB' 'Connect To DB' 'Drop DB' 'Exit'
	do
		case $menu in
		'Create DB')
			source ./createDB.sh
			;;
		'List DB')
			source ./listDB.sh
			;;
		'Connect To DB')
			./listDB.sh
			echo $' - These are the current database:-\n'
			source ./connectDB.sh
			;;
		'Drop DB')
			source ./listDB.sh
			echo $' - These are the current database:- '
			source ./dropDB.sh
			;;
		'Exit')
			source ./exitScript.sh
			;;
		*)
			echo "Not valid choice!"
            ./startView.sh
			;;
		esac
	done
    echo $'\n'