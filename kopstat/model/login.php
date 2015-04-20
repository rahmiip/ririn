<?php
session_start();
include 'koneksi.php';
	$is_ajax = $_REQUEST['is_ajax'];
	if(isset($is_ajax) && $is_ajax)
	{ 
		//$username = isset($_POST['username']) ? $_POST['username'] : ' ';
		$username= $_REQUEST['username'];
		$password= $_REQUEST['password'];
		$sql1="select pengguna.username, pengguna.password, pengguna.user_type, anggota.id_anggota , anggota.nama, anggota.tgl_masuk
			from anggota, pengguna
			where pengguna.id_anggota=anggota.id_anggota
			and pengguna.username='$username' and pengguna.password='$password'";
		$cek1 = pg_query ($sql1); 
		if(pg_num_rows ($cek1) == 1)
		{
			$c1 = pg_fetch_array($cek1);
			$_SESSION['username'] = $c1['username'];
			$_SESSION['password'] = $c1['password'];
			$_SESSION['user_type'] = 'admin';
			$_SESSION['id_anggota'] = $c1['id_anggota'];
			$_SESSION['nama'] = $c1['nama'];
			$_SESSION['tgl_masuk'] = $c1['tgl_masuk'];
			
			$json = '{"items":[ ';
						$json .= '{';
						$json .= '"ret":"1"
							}';
						$json .= ']';
						
						$json .= '}';
						echo $json;
		}
			
		/* else{
			
			$json = '{"items":[ ';
						$json .= '{';
						$json .= '"ret":"3"
							}';
						$json .= ']';
						
						$json .= '}';
						echo $json;		
			} */
		
	}
?>