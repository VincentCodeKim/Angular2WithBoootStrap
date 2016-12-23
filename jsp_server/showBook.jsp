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
    System.out.println("id:" + id);
    
    
    System.out.println("...");
    conn = DriverManager.getConnection(
        "jdbc:mysql://127.0.0.1:3306/test?useUnicode=true&characterEncoding=utf-8", 
        "root", 
        "1234");
    stmt = conn.createStatement();
    String sql = "select id, name, price, date, img from book where id= '" + id + "'";

    rs= stmt.executeQuery(sql);
    
    StringBuffer temp= new StringBuffer();
    int i=0;
    if(rs.next()){
        temp.append("'book':{'id':'").append(rs.getString("id"))
            .append("','name':'").append(rs.getString("name"))
            .append("','price':").append(rs.getLong("price"))
            .append(",'date':'").append(rs.getString("date"))  
            .append("','img':'").append(rs.getString("img"))                          
            .append("'}");
    }else {
        strMsg = "해당도서(id:" + id + ")를 찾을 수 없습니다.";
        temp.append("'book':{}");
        throw new Exception();
    }
    strResult = temp.toString();
    strSuccess = "true";
}
catch(Exception ex)
{
	strSuccess = "false";
	if(strMsg.trim().length() == 0){
		strMsg = ex.toString().replace("\"", "");
	}
}
finally
{
    try{ rs.close();}catch(Exception exRs){}
    try{ stmt.close();}catch(Exception exStmt){}
    try{ conn.close();}catch(Exception exConn){}
}
strReturn = "{'success':" + strSuccess + ", 'info':{" + strResult + "}, 'msg': '" + strMsg + "'}";

out.println(strReturn.replace('\'','\"').trim());
%>

