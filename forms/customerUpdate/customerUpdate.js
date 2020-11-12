let newName = " "

customerUpdate.onshow=function(){
  let query = "SELECT name FROM customer;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)
    if (req.status == 200) { //transit worked.
      customerInfo = JSON.parse(req.responseText)
        drpUpdate.clear()
        for (i = 0; i <= customerInfo.length - 1; i++)
                drpUpdate.addItem(customerInfo[i])
    } else {
        NSB.MsgBox(`Error: ${req.status}`);
    }  
}


drpUpdate.onclick=function(s){
    if(typeof(s) == "object") {
      return
    } else {
    drpUpdate.value = s 
    newName = drpUpdate.value
  }
}

btnCustomerUpdate.onclick=function(){
    query = "UPDATE customer SET name =" + '"' + inptCustomerUpdate.value + '"' + " WHERE name = " + '"' + drpUpdate.value + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)
    if (req.status ==200){
        if (req.responseText == 500){
        lblNewMessage.value = `The name has been changed from ${drpUpdate.value} to ${inptCustomerUpdate.value}`
        
         query = `SELECT name FROM customer;`
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)

        addedCustomers = " "
        if (req.status == 200) { //transit worked.
           addedCustomers = JSON.parse(req.responseText)
          console.log(addedCustomers)
        } else
          console.log("error")
        
        let newCustomerList1 = ""
        for (i = 0; i <= addedCustomers.length - 1; i++)
          newCustomerList1  = newCustomerList1 + addedCustomers[i] + "\n"
        txtResults2.value = newCustomerList1
      }
   }
}