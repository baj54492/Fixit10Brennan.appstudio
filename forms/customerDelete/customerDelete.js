pw = "GOJAYS923"

customerDelete.onshow = function() {
  drpDelete.clear()
  query = "SELECT name from customer2"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=baj54492&pass=" + pw + "&database=baj54492&query=" + query)
if (req.status == 200) { 
customerInfo = JSON.parse(req.responseText)
console.log(customerInfo)
}
if (customerInfo.length == 0) {
console.log("The customer you selected cannot be deleted.")
} else {
for (i = 0; i <= customerInfo.length - 1; i++)
drpDelete.addItem(customerInfo[i][0])
}
}


drpDelete.onclick = function(s) {
  if (typeof(s) == "object")
    return
  else {
    drpDelete.value = s 
    let deletedCustomer = s
    let found = false
    for (i = 0; i <= customerInfo.length - 1; i++) {
      if (deletedCustomer == customerInfo[i][0]) {
        found = true;
        break;
      }
    }
    
    if (found == false)
     lblDeleteMessage.value = `That customer is not in the database.${deletedCustomer} \n ${customerInfo}`
    else if (found == true) {
      query = "DELETE FROM customer2 WHERE name = " + '"' + deletedCustomer + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=baj54492&pass=" + pw + "&database=baj54492&query=" + query)
      
      if (req.status == 200) { 
        if (req.responseText == 500) 
          console.log(`You have successfully deleted the customer named ${deletedCustomer}`)
        else
          console.log(`There was a problem deleting ${deletedCustomer} from the database.`)
      } else {
        console.log(`Error: ${req.status}`);
      }
    }
    // run the ajax to get the new list of customers
    query = `SELECT name from customer2`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=baj54492&pass=" + pw + "&database=baj54492&query=" + query)

    if (req.status == 200) { 
      afterDelete = JSON.parse(req.responseText)
    } else {
      console.log(`Error: ${req.status}`);
    }
    let customerList = ""
    for (i = 0; i <= afterDelete.length - 1; i++)
      customerList = customerList + afterDelete[i] + "\n"
    txtResults1.value = customerList
  }
}

btnNext3.onclick=function(){
  ChangeForm(customerAdd)
}
