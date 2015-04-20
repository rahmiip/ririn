<?php
session_start();
$username = $_SESSION['username'];
include 'koneksi.php';
	
		$sql1=pg_query("select pengguna.username, pengguna.password, pengguna.user_type, anggota.id_anggota , anggota.nama, anggota.tgl_masuk
			from anggota, pengguna
			where anggota.id_anggota=pengguna.id_anggota
			and pengguna.username='$username'  
			");
		
		$profil = null;
		while ($row = pg_fetch_object($sql1)){
			$profil[] = $row;
		}
		echo json_encode($profil);
		
?>
