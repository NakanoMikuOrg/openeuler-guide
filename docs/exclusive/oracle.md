---
sidebarDepth: 2
---

# Oracle æ°æ®åº

> ### ðº æææ²æ²éæªéï¼èªå°ç£¨æ´è®¤åæ
>
> è¿ä¸å°èæä»¬å°è®¨è®ºå¦ä½å¨ openEuler ä¸é¨ç½² Oracle æ°æ®åºã

> ### ð è¿ä¸èå°ä¼è®¨è®ºï¼
>
> ::: details ç®å½
>
> [[toc]]
>
> :::

## äºè§£ Oracle æ°æ®åº

[Oracle æ°æ®åº](https://www.oracle.com/cn/database/)ï¼ç®ç§° Oracleï¼æ¯ [ç²éª¨æå¬å¸](https://www.oracle.com/cn/index.html) çä¸æ¬¾å³ç³»æ°æ®åºã

å½åææ°çé¿ææ¯æçä¸º Oracle Database 19cï¼ä½é¨åä¼ä¸è¿å¨ä½¿ç¨ [Oracle Database 12c](https://www.oracle.com/cn/database/12c-database/)ãæ¬æåä¼å¯¹è¿ä¸¤ä¸ªçæ¬è¿è¡é¨ç½²æ¼ç¤ºã

## å®è£ Oracle æ°æ®åº

### 1. åºå® IP å°å

åé [1-2. åºå® IP å°å](../rookie/basic-cfg.md#_1-2-åºå®-ip-å°å) å° IP å°ååºå®ã

### 2. ç»å®ä¸»æºå

åé [1-3. ç»å®ä¸»æºå](../rookie/basic-cfg.md#_1-3-ç»å®ä¸»æºå) å° IP å°ååä¸»æºåç»å®ã

### 3. å³é­ SELinux

1. æ¥ç SELinux è¿è¡ç¶æï¼

   ```sh
   sestatus
   ```

   è¥ç¬¬ä¸è¡ä¸ºä»¥ä¸åå®¹åä¸ºè¿è¡ç¶æï¼

   ```sh
   SELinux status:                 enabled
   ```

2. å³é­ SELinuxï¼

   ```sh
   setenforce 0 # ææ¶å³é­ SELinux
   sudoedit /etc/selinux/config # ç¼è¾ SELinux éç½®æä»¶
   ```

   å° `SELINUX` çå¼æ¹ä¸º `disabled`ï¼

   ```conf
   SELINUX=disabled # éå¯åæä¼çæ
   ```

   ![selinux](../static/exclusive/oracle/selinux.png)

### 4. å³é­é²ç«å¢

1. æ¥çé²ç«å¢è¿è¡ç¶æï¼

   ```sh
   systemctl status firewalld.service
   ```

   ![firewalld-1](../static/exclusive/oracle/firewalld-1.png)

2. å³é­é²ç«å¢ï¼

   ```sh
   sudo systemctl stop firewalld.service # å³é­é²ç«å¢
   sudo systemctl disable firewalld.service # ç¦æ­¢å¼æºå¯å¨
   systemctl status firewalld.service # å¤æ¥ä¸ä¸
   ```

   ![firewalld-2](../static/exclusive/oracle/firewalld-2.png)

### 5. éå¯ç³»ç»

```sh
reboot
```

### 6. ä¸è½½å®è£æä»¶

1. æå¼ [Oracle å®æ¹ç½ç«](https://www.oracle.com/cn/database/technologies/) > ç¹å» `ä¸è½½ Oracle Database 19c`ï¼

   ![download-1](../static/exclusive/oracle/download-1.png)

2. ç¹å» `Linux x86-64` å³ä¾§ç `ZIP` ä¸è½½è¿æ¥ï¼å¼å§ä¸è½½ï¼

   ![download-2](../static/exclusive/oracle/download-2.png)

   ::: tip â¹ï¸ æç¤º

   éè¦ç»å½ç²éª¨æè´¦æ·å¹¶åæç¸å³åè®®ã

   :::

3. è¥ä¸æ¯å¨ openEuler ç³»ç»ä¸­ç´æ¥éè¿æµè§å¨ä¸è½½ï¼åéè¦éè¿éå½æ¹æ³ï¼å¦ FTPï¼å°æä»¶ä¸ä¼ å° openEuler ç³»ç»ä¸­

### 7. å®è£ä¾èµå

1. å®è£ç¸å³ä¾èµåï¼

   1. æ¥è¯¢æªå®è£çä¾èµåï¼

   ```sh
   rpm --query --queryformat "%{NAME}-%{VERSION}.%{RELEASE} (%{ARCH})\n" bc binutils compat-libcap1 compat-libstdc++-33 gcc gcc-c++ glibc glibc-devel ksh libaio libaio-devel libgcc libstdc++ libstdc++-devel make sysstat elfutils-libelf elfutils-libelf-devel fontconfig-devel libxcb smartmontools libX11 libXau libXtst libXrender libXrender-devel libnsl
   ```

   2. å®è£æªå®è£çä¾èµåï¼

   ```sh
   sudo dnf install bc binutils compat-libcap1 compat-libstdc++-33 gcc gcc-c++ glibc glibc-devel ksh libaio libaio-devel libgcc libstdc++ libstdc++-devel make sysstat elfutils-libelf elfutils-libelf-devel fontconfig-devel libxcb smartmontools libX11 libXau libXtst libXrender libXrender-devel libnsl # å·²ç»å®è£çä¼èªå¨è·³è¿
   ```

### 8. åå»ºç¸å³ç¨æ·åç¨æ·ç»

1. åå»ºç¸å³ç¨æ·ç»ï¼

   ```sh
   sudo groupadd oinstall
   sudo groupadd dba
   sudo groupadd oper
   sudo groupadd osoper
   ```

   ![groupadd](../static/exclusive/oracle/groupadd.png)

2. åå»ºç¸å³ç¨æ·å¹¶å°å¶æ·»å å°ç¸å³ç»ä¸­ï¼

   ```sh
   sudo useradd -g oinstall -G dba,oper,osoper oracle
   ```

   ![useradd](../static/exclusive/oracle/useradd.png)

3. ä¸º `oracle` ç¨æ·åå»ºå¯ç ï¼

   ```sh
   sudo passwd oracle
   ```

   ![passwd](../static/exclusive/oracle/passwd.png)

### 9. ä¿®æ¹ç¸å³éç½®æä»¶

1. ä¿®æ¹ `/etc/security/limits.conf` æä»¶æ¥ä¿®æ¹ `oracle` ç¨æ·ç Shell éå¶ï¼

   ```sh
   sudoedit /etc/security/limits.conf
   ```

   å¨æä»¶æ«å°¾æ·»å ä»¥ä¸åå®¹ï¼

   ```conf
   oracle soft nproc 2047
   oracle hard nproc 16384
   oracle soft nofile 1024
   oracle hard nofile 65536
   oracle soft stark 10240
   ```

   ![config-1](../static/exclusive/oracle/config-1.png)

2. ä¿®æ¹ `/etc/sysctl.conf` æä»¶æ¥ä¿®æ¹æ°æ®åºæéçåæ ¸åæ°ï¼

   ```sh
   sudoedit /etc/sysctl.conf
   ```

   å¨æä»¶æ«å°¾æ·»å ä»¥ä¸åå®¹ï¼

   ```conf
   fs.aio-max-nr = 1048576
   fs.file-max = 6815744
   kernel.shmall = 16451328
   kernel.shmmax = 33692319744
   kernel.shmmni = 4096
   kernel.sem = 250 32000 100 128
   net.ipv4.ip_local_port_range = 9000 65500
   net.core.rmem_default = 262144
   net.core.rmem_max = 4194304
   net.core.wmem_default = 262144
   net.core.wmem_max = 1048576
   ```

   ![config-2](../static/exclusive/oracle/config-2.png)

3. ä½¿åæ ¸åæ°çæï¼

   ```sh
   sudo sysctl -p
   ```

   ![config-3](../static/exclusive/oracle/config-3.png)

4. ä¿®æ¹ `/etc/pam.d/login` ä»¥æ·»å éªè¯æ¨¡åï¼

   ```sh
   sudoedit /etc/pam.d/login
   ```

   å¨æä»¶æ«å°¾æ·»å ä»¥ä¸åå®¹ï¼

   ```conf
   session    required     pam_limits.so
   ```

   ![config-4](../static/exclusive/oracle/config-4.png)

5. ä¿®æ¹ `/etc/profile` ä»¥ä¿®æ¹ç³»ç»ç¯å¢åéï¼

   ```sh
   sudoedit /etc/profile
   ```

   å¨æä»¶æ«å°¾æ·»å ä»¥ä¸åå®¹ï¼

   ```sh
   if [ $USER = 'oracle' ]; then
      if [ $SHELL = '/bin/ksh' ]; then
         ulimit -p 16384
         ulimit -n 65536
      else
         ulimit -u 16384 -n 65536
      fi
   fi
   ```

   ![config-5](../static/exclusive/oracle/config-5.png)

6. ä¿®æ¹ `/home/oracle/.bash_profile` ä»¥ä¿®æ¹ `oracle` ç¨æ·ç¯å¢åéï¼

   ```sh
   sudoedit /home/oracle/.bash_profile
   chown
   ```

   å¨æä»¶æ«å°¾æ·»å ä»¥ä¸åå®¹ï¼

   ```sh
   export ORACLE_BASE=/u01/app/oracle
   export ORACLE_HOME=$ORACLE_BASE/product/19.3/db_1
   export ORACLE_SID=orcl
   export PATH=$PATH:$ORACLE_HOME/bin
   ```

   ![config-6](../static/exclusive/oracle/config-6.png)

### 9. åå»ºç®å½

1. åå»ºç¸å³ç®å½ï¼

   ```sh
   sudo mkdir -p /u01/app/oracle/product/19.3/db_1
   sudo mkdir -p /u01/soft
   ```

   ![config-7](../static/exclusive/oracle/config-7.png)

2. ç§»å¨å®è£æä»¶å°å¯¹åºä½ç½®å¹¶è§£åï¼

   ```sh
   sudo mv /path/to/LINUX.X64_193000_db_home.zip /u01/soft
   cd /u01/soft
   sudo unzip LINUX.X64_193000_db_home.zip > /dev/null
   ```

3. ä¿®æ¹å±ä¸»åå±ç»ï¼

   ```sh
   sudo chown -R oracle:oinstall /u01
   ```

   ![config-8](../static/exclusive/oracle/config-8.png)

### 10. å¼å§å®è£

1. å¨å¾å½¢çé¢ç»å½å° `oracle` ç¨æ·

2. æå¼ç»ç«¯ > åæ¢å° `/u01/soft` ç®å½ > è¿è¡å®è£åå¯¼ï¼

   ```sh
   cd /u01/soft
   ./runInstaller # è¿è¡å®è£åå¯¼
   ```

   /etc/locale.conf

   ![install-1](../static/exclusive/oracle/install-1.png)

   ![install-2](../static/exclusive/oracle/install-2.png)

3. éæ© `Set Up Software Only`ï¼ä»è®¾ç½®è½¯ä»¶ï¼> ç¹å» `Next`ï¼ä¸ä¸æ­¥ï¼ï¼

   ![install-3](../static/exclusive/oracle/install-3.png)

4. æ­¤å¤ä»¥åå®ä¾æ°æ®åºä¸ºä¾ï¼æéæ© `Single instance database installation`ï¼åå®ä¾æ°æ®åºå®è£ï¼> ç¹å» `Next`ï¼ä¸ä¸æ­¥ï¼ï¼

   ![install-4](../static/exclusive/oracle/install-4.png)

5. éæ© `Enterprise Edition`ï¼ä¼ä¸çï¼> ç¹å» `Next`ï¼ä¸ä¸æ­¥ï¼ï¼

   ![install-5](../static/exclusive/oracle/install-5.png)

6. ç±äºä¹åå·²ç»éç½®äº `$ORACLE_BASE` ç¯å¢åéï¼æä»¥ç¹å» `Next`ï¼ä¸ä¸æ­¥ï¼å³å¯ï¼

   ![install-6](../static/exclusive/oracle/install-6.png)

7. æ­¤å¤ä¸ºäº§åæ¸åç®å½ï¼å®è£è¿ç¨ä¸­äº§ççä¸´æ¶æä»¶ä½ç½®ï¼ä»¥åå¯¹äº§åæ¸åç®å½å·æåæéçç¨æ·ç»ï¼ç¹å» `Next`ï¼ä¸ä¸æ­¥ï¼å³å¯ï¼

   ![install-7](../static/exclusive/oracle/install-7.png)

8. æ­¤å¤ä¸ºå¯¹æ°æ®åºè¿è¡ç¸åºæä½æéæéå¯¹åºçç¨æ·ç»ï¼åæ ·çï¼ç¹å» `Next`ï¼ä¸ä¸æ­¥ï¼å³å¯ï¼

   ![install-8](../static/exclusive/oracle/install-8.png)

9. ç¹å» `Next`ï¼ä¸ä¸æ­¥ï¼å³å¯ï¼

   ![install-9](../static/exclusive/oracle/install-9.png)

10. å®è£ï¼

```sh
dnf install mksh libaio libgfortran gcc-c++ rdma-core-devel libtiff libstdc++ libpng libpcap libjpeg-turbo libXrender libXi libXext libXau libX11 libstdc++ libXtst libgcc libcap libcap-ng libstdc++ libaio
```

## æ¥ä¸æ¥...
