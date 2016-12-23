<%@ page contentType="text/html;charset=utf-8"  pageEncoding="utf-8" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.ResultSet" %>
<%@ page import="java.sql.SQLException" %>
<%
String strReturn ="";
String strMsg ="";
String strResult = "";
String strSuccess = "false";

Connection conn = null;
Statement stmt = null;
ResultSet rs = null;
try
{
    Class.forName("com.mysql.jdbc.Driver");

    request.setCharacterEncoding("utf-8");
    String id = request.getParameter("id");
    String name = request.getParameter("name");
    String price = request.getParameter("price");
    String date = request.getParameter("date");
    String img = request.getParameter("img");
    System.out.println("id:" + id);
    
    
	System.out.println("...");
    conn = DriverManager.getConnection(
        "jdbc:mysql://127.0.0.1:3306/test?useUnicode=true&characterEncoding=utf-8", 
        "root", 
        "1234");
    stmt = conn.createStatement();
    String sql = "select id, name, price, date, img from book where id= '" + id + "'";

    rs= stmt.executeQuery(sql);
    
    StringBuffer tempList = new StringBuffer();
    int i=0;
    if(rs.next()){
    	String sqlUpdate = 
    	"update book set " + 
    	" name = '" + name + "'," + 
    	" price = " + price + "," + 
    	" date = '" + date + "', " +
        " img = '" + img + "'" +  
    	" where id = '" + id + "' "; 
    	stmt.execute(sqlUpdate);

    }else {
    	strMsg="해당 도서가 없습니다.";
    	throw new Exception();
    }
    strMsg = "변경하였습니다..";
    strSuccess = "true";    
}
catch(Exception ex)
{
	if(strMsg.trim().length() == 0){
		strMsg = ex.toString();
	}
}
finally
{
    try{ rs.close();}catch(Exception exRs){}
    try{ stmt.close();}catch(Exception exStmt){}
    try{ conn.close();}catch(Exception exConn){}
}
strReturn = "{'success':" + strSuccess + ", 'data':'" + strResult + "', 'msg': '" + strMsg.replace('\"',' ').replace('\'',' ') + "'}";
out.println(strReturn.replace('\'','\"').trim());
%>

