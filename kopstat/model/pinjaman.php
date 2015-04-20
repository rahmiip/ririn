<?php
session_start();
$username = $_SESSION['username'];
$id_anggota = $_SESSION['id_anggota'];
include 'koneksi.php';
	
		$sql1=pg_query("SELECT 
  pinjaman.id_anggota, pinjaman.id_jenispinj, pinjaman.juml_diterima, pinjaman.jangka_waktu, pinjaman.status
FROM 
pinjaman, 
anggota
WHERE
 anggota.id_anggota = pinjaman.id_anggota and
 anggota.id_anggota='$id_anggota' 
			");
		
		$profil = null;
		while ($row = pg_fetch_object($sql1)){
			$profil[] = $row;
		}
		echo json_encode($profil);
		
?>
