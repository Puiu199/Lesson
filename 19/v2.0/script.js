// 1.Выполните деструктуризацию указанного ниже массива 
            // p.s. испоьзуйте вставку переменных
            let clients = [
                {
                    user: "felixpetrov@gmail.com",
                    password: 'j54nd983bg_',
                    balance: [
                        {
                            valute: 'mdl',
                            balance: 20190
                        },
                        {
                            valute: 'usd',
                            balance: 678
                        }
                    ],
                    statusActive: 'Enabled',
                    individual: true,
                    credit: 11000,
                    property:['Alfa Romeo 1985', 'or. Chishinau str. Puskin №31/6']
                }, 
                {
                    user: "daniilmarkov@gmail.com",
                    password: '0d(ensc9n43s',
                    balance:
                    [
                        {
                            balance: 0.034,
                            valute: 'eur'
                        }
                    ],
                    statusActive: 'Disabled',
                    property:['Mazda 6', 'or. Orhei str. Plo tnikov №198']
                    
                }
            ]
            let [user1,user2]=clients;
            
            let{
                user:mail1,
                password:pass1,
                balance:sold1,
                statusActive:st1,
                individual:status1,
                credit:cre1,
                property:about1
            }=user1;
            let [debit1,debit2]=sold1;
            let {valute:val_debit1,balance:sum_debit1}=debit1;
            let {valute:val_debit2,balance:sum_debit2}=debit2;
            let [car1,str1]=about1;

            let{
                user:mail2,
                password:pass2,
                balance:sold2,
                statusActive:st2,
                individual:status2,
                credit:cre2,
                property:about2
            }=user2;
            let [debit3]=sold2;
            let {valute:val_debit3,balance:sum_debit3}=debit3;
            let [car2,str2]=about2;
            console.log();