 
       function fine(){
            var date1 = new Date("9/20/2018"); 
            var date2 = new Date();
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
            var fine = Math.abs(fineDays*(2));
            //var fineDays;
            /*if(diffDays>30){
                fineDays = diffDays - 30;
                fine = Math.abs(fineDays*(2));
            }
            //alert(fine);*/
            document.getElementById('p').innerHTML = fine;
        }
  