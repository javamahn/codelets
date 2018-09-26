//Created by Stephen J. Anderson 9/26/2018
//this script will update all questions in a category 
//on the Service provider questionnaire to depend on Question 1
var gr = new GlideRecord("asmt_metric");
//replace with the sys_id of the category for the metrics to be changed
gr.addQuery("category","edaecbd113b8eb408ae070146144b0e2");
gr.query();
while (gr.next()) {
//	Below is the sys_id of question 1 confirm this before running the script
	gr.depends_on = "5e471a0813db9f008cc1f4b2e144b009";
	gr.update();
} 
gr
