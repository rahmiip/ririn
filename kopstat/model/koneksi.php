<?php
	/*class koneksi
	{
		private $hostname = "localhost";
		private $username = "postgres";
		private $passwordnya = "adaaja";
		private $db = "bismillah";
		
		//method koneksi postgreSQL
		
		function connect()
		{
			$dbh = pg_connect("host = ".$this->hostname." user = ".$this->username."  password = ".$this->passwordnya." dbname = ".$this->db."");
			
		}
	}
 $database = new koneksi();
 $database->connect();*/
 
$host="localhost";
$user="postgres";
$pass="database";
$db="ksp";
$koneksi = pg_connect("host=$host dbname=$db user=$user password=$pass");

?>