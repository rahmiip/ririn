var Mprofil="http://localhost/fix/model/profil.php";
$('#welcome').bind('pageinit',function(event){
		tampilkan();
});
function tampilkan(){
	$.getJSON(Mprofil, function (data){
		$('#profil').empty();
		$('#profil').append('<h4 align="center"><b>Welcome</b></h4>')
		$.each(data, tampilkan_lagi);
	});
}
function tampilkan_lagi(index, profil){	
	$('#profil').append
	('<div class="ui-block-a">ID Anggota :</div><div class="ui-block-b">'
	+profil.id_anggota+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Nama :</div><div class="ui-block-b">'
	+profil.nama+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Tanggal Masuk :</div><div class="ui-block-b">'
	+profil.tgl_masuk+' <br></br></div>');

}
var Msimpanan="http://localhost/fix/model/simpanan.php";
$('#simpanan2').bind('pageinit',function(event){
		tampilsimpanan();
});
function tampilsimpanan(){
	$.getJSON(Msimpanan, function (data){
		$('#simpanan1').empty();
		$('#simpanan1').append('<h4 align="center"><b>Jumlah Simpanan</b></h4>')
		$.each(data, tampilkansimpanan);
	});
}
function tampilkansimpanan(index, simpanan){	
	$('#simpanan1').append
	('<div data-role="fieldcontain"><div class="ui-block-a" >ID Anggota :</div><div class="ui-block-b">'
	+simpanan.id_anggota+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Simpanan Pokok :</div><div class="ui-block-b">'
	+simpanan.total_pokok+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Simpanan Wajib :</div><div class="ui-block-b">'
	+simpanan.total_wajib+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Simpanan S. Wajib :</div><div class="ui-block-b">'
	+simpanan.total_swajib+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Simpanan S. Berhadiah :</div><div class="ui-block-b">'
	+simpanan.total_sberhadiah+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Total Simpanan :</div><div class="ui-block-b">'
	+simpanan.total+'<br></br></div></div>');

}
var Mpinjaman="http://localhost/fix/model/pinjaman.php";
$('#pinjaman2').bind('pageinit',function(event){
		tampilpinjaman();
});
function tampilpinjaman(){
	$.getJSON(Mpinjaman, function (data){
		$('#pinjaman1').empty();
		$('#pinjaman1').append('<h4 align="center"><b>Riwayat pinjaman</b></h4>')
		$.each(data, tampilkanpinjaman);
	});
}
function tampilkanpinjaman(index, pinjaman){	
	$('#pinjaman1').append
	('<div data-role="fieldcontain"><div class="ui-block-a" >ID Anggota :</div><div class="ui-block-b">'
	+pinjaman.id_anggota+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Simpanan Wajib :</div><div class="ui-block-b">'
	+pinjaman.id_jenispinj+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Simpanan S. Wajib :</div><div class="ui-block-b">'
	+pinjaman.juml_diterima+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Simpanan S. Berhadiah :</div><div class="ui-block-b">'
	+pinjaman.jangka_waktu+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">Total Simpanan :</div><div class="ui-block-b">'
	+pinjaman.status+'<br></br></div></div>');

}
var Mangsuran="http://localhost/fix/model/angsuran.php";
$('#angsuran2').bind('pageinit',function(event){
		tampilangsuran();
});
function tampilangsuran(){
	$.getJSON(Mangsuran, function (data){
		$('#angsuran1').empty();
		$('#angsuran1').append('<h4 align="center"><b>Riwayat angsuran</b></h4>')
		$.each(data, tampilkanangsuran);
	});
}
function tampilkanangsuran(index, angsuran){	
	$('#angsuran1').append
	('<div data-role="fieldcontain"><div class="ui-block-a" >NO SK :</div><div class="ui-block-b">'
	+angsuran.nomor_surat+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">angsuranatan :</div><div class="ui-block-b">'
	+angsuran.nama_angsuran+'</div><div class="ui-block-a" style="zoom:30%"><br></div><div class="ui-block-b"></div><div class="ui-block-a">TMT angsuranatan :</div><div class="ui-block-b">'
	+angsuran.tmt_angsuran+'<br></br></div></div>');

}