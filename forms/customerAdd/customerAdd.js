
customerAdd.onshow=function(){
  drpAdd.clear()
  query = "SELECT name FROM customer;"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)

  if (req.status == 200){
   results = JSON.parse(req.responseText)
   console.log(results)
   console.log(typeof(results))
   for (i = 0; i <= results.length - 1; i++){
            drpAdd.addItem(results[i])
              }
}
}
    
btnAdd.onclick=function(){
if(typeof(s) == "object") {
  return
  } else {
     query = `INSERT INTO customer (name, street, city, state, zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178');`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)
    lblAdd.text = `Jesse Antiques was added!`  //hardcode Jesse Antiques into the txtAdd
    
    query = `SELECT name FROM customer;`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsb38658&pass=GOJAYS!&database=dsb38658&query=" + query)

    updatedCustomers = ""
    if (req.status == 200) { //transit worked.
      updatedCustomers = JSON.parse(req.responseText)
      console.log(updatedCustomers)
    } else
      console.log("error")
    
    let newCustomerList = ""
    for (i = 0; i <= updatedCustomers.length - 1; i++)
      newCustomerList = newCustomerList + updatedCustomers[i] + "\n"
    txtAdd.value = newCustomerList
  }
}


btnNext2.onclick=function(){
  ChangeForm(customerUpdate)
}
