# GIT MASTER
belajar git dari dasar menuju mahir

Cara Menghapus File pada Git Repository
16/08/2017 / ANTO
Untuk menghapus file/folder pada git repository dapat menggunakan perintah git rm.

$ git rm filename

Tetapi jika anda hanya ingin menghapus file pada repository dan tidak menghapusnya pada file anda, tambahkan flag --cache

$ git rm --cache filename

Kemudian commit dan push ke repository anda.


Note:
Untuk menghapus folder yang berisi banyak file, tambahkan flag -r

$ git rm --cache folder/ -r
