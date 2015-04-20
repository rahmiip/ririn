<?php
session_start();
$username = $_SESSION['username'];
$nip = $_SESSION['nip'];
include 'koneksi.php';
	
		$sql1=pg_query("SELECT  
  golongan.gol, 
  golongan.pangkat, 
  det_gol.tmt_gol, 
  det_gol.nomor_surat, 
  pegawai.nip
FROM 
det_gol, 
pegawai, 
golongan
WHERE 
  det_gol.id_gol = golongan.id_gol AND
  pegawai.nip = det_gol.nip and
 pegawai.nip='$nip';  
			");
		
		$profil = null;
		while ($row = pg_fetch_object($sql1)){
			$profil[] = $row;
		}
		echo json_encode($profil);
		
?>
