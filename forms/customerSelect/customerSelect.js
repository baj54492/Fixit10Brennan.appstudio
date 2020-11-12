let results = ""
let req = ""
let query = ""
let customerInfo = ['']

customerSelect.onshow=function(){
    drpCustomers.clear()
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)

    if (req.status == 200) {   
      results = JSON.parse(req.responseText)
          console.log(results)
          customerInfo = results
      if (results.length == 0)           
          NSB.MsgBox(`There are no customers in the database.`)
      else {    
          for (i = 0; i < results.length; i++)
            drpCustomers.addItem(results[i][1])
      }
    } else {
        NSB.MsgBox("Error code: " + req.status)
}
}

drpCustomers.onclick=function(s){
    if (typeof(s) == "object"){ 
      return  
    } else {
      drpCustomers.value = s
      let message  = ""
      for (i = 0; i < customerInfo.length; i++)
        if (s == customerInfo [i][1])
          customerState = customerInfo [i][4]
      for (i = 0; i < customerInfo.length; i++)
        if (customerState == customerInfo [i][4])
          message = message + customerInfo[i][1] + "\n"
        txtResults.value = `These are the customers located in ${customerState}: \n${message}`
    }
    }
    
    
    
btnNext.onclick=function(){
  ChangeForm(customerDelete)
}
