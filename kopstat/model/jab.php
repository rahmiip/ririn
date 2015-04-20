<?php
session_start();
$username = $_SESSION['username'];
$nip = $_SESSION['nip'];
include 'koneksi.php';
	
		$sql1=pg_query("SELECT 
  det_jab.tmt_jab, 
  det_jab.nomor_surat, 
  jabatan.nama_jab
FROM 

pegawai, 
det_jab, 

jabatan

WHERE 
 
  pegawai.nip = det_jab.nip AND
  
  jabatan.id_jab = det_jab.id_jab AND

 pegawai.nip='$nip';  
			");
		
		$profil = null;
		while ($row = pg_fetch_object($sql1)){
			$profil[] = $row;
		}
		echo json_encode($profil);
		
?>
