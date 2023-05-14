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
                    property:['Mazda 6', 'or. Orhei str. Plotnikov №198']
                    
                }
            ]
           let id,pass,st,pr,cr,car,add,val1,num1;
            id=document.querySelector('#id');
            pass=document.querySelector('#pass');
            st=document.querySelector('#st');
            pr=document.querySelector('#pr');
            cr=document.querySelector('#cr');
            car=document.querySelector('#car');
            add=document.querySelector('#add');
            val1=document.querySelector('#val1');
            sum=document.querySelector('#sum');
            let user_name=document.querySelector('#user_name');
            
            let[client1,client2]=clients;          
            let{user,password,balance,statusActive,individual,credit,property}=client1;
            let[ban1,ban2]=balance;                   
            let{valute:money1,balance:sum1}=ban1;              
            let{valute:money2,balance:sum2}=ban2;    
            let[cars1,address1]=property;
            ////////////////////////////////////////////////////////////////////
            let{user:user2,password:password2,balance:balance2,statusActive:statusActive2,property:property1}=client2;
            let[ban3]=balance2; 
            let{valute:money3,balance:sum3}=ban3; 
            let[cars2,address2]=property1;

            $('#go').on('click',verificare);
            function verificare()
            {
           if(user_name.selectedIndex==0)
           { 
            
            id.innerHTML=" "
                pass.innerHTML=" ";
                st.innerHTML=" ";
                val1.innerHTML=" ";
                sum.innerHTML=" ";
                pr.innerHTML=" ";
                cr.innerHTML=" ";           
                car.innerHTML=" ";
                add.innerHTML=" "; 
                alert("Please select user!")
           }else{
            switch(user_name.selectedIndex)
            {
                case 1:            
                id.innerHTML=user;
                pass.innerHTML=password;
                st.innerHTML=statusActive;
                val1.innerHTML=money1;
                sum.innerHTML=sum1;
                pr.innerHTML=individual;
                cr.innerHTML=credit;           
                car.innerHTML=cars1;
                add.innerHTML=address1; break;
                case 2:   
                id.innerHTML=user2;
                pass.innerHTML=password2;
                st.innerHTML=statusActive2;
                cr.innerHTML="-----";     
                val1.innerHTML=money3;      
                sum.innerHTML=sum3;
                add.innerHTML=address1;
                car.innerHTML=cars2;
                add.innerHTML=address2; break;                     
            default: alert('Selectati Utilizatorul');
            }}}
           
            
            
            



            



            