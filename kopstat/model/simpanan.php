<?php
session_start();
$username = $_SESSION['username'];
$id_anggota = $_SESSION['id_anggota'];
include 'koneksi.php';
	
		$sql1=pg_query("SELECT 
  simpanan.id_anggota, anggota.nama, simpanan.total_pokok, simpanan.total_wajib, simpanan.total_swajib, simpanan.total_sberhadiah, simpanan.total
FROM 
simpanan, 
anggota
WHERE
 anggota.id_anggota = simpanan.id_anggota and
 anggota.id_anggota='$id_anggota' 
			");
		
		$profil = null;
		while ($row = pg_fetch_object($sql1)){
			$profil[] = $row;
		}
		echo json_encode($profil);
		
?>
