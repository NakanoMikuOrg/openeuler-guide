---
sidebarDepth: 2
---

# MongoDB æ°æ®åº

> ### ð ä¸ç¥ç»å¶è°è£åºï¼äºææ¥é£ä¼¼åªå
>
> è¿ä¸å°èæä»¬å°è®¨è®ºå¦ä½å¨ openEuler ä¸é¨ç½² MongoDB æ°æ®åºã

> ### ð è¿ä¸èå°ä¼è®¨è®ºï¼
>
> ::: details ç®å½
>
> [[toc]]
>
> :::

![neofetch](../static/public/neofetch.png)

## äºè§£ MongoDB æ°æ®åº

[MongoDB](https://www.mongodb.com/zh-cn) æ¯ç± MongoDB Inc.ï¼å½æ¶æ¯ 10gen å¢éï¼äº 2007 å¹´ 10 æå¼åï¼2009 å¹´ 2 æé¦åº¦æ¨åºçéå³ç³»åæ°æ®åºï¼æ¯éç¨ãåºäºææ¡£çåå¸å¼æ°æ®åºã

## å®è£ MongoDB æ°æ®åº

### 1. ä¸è½½å®è£æä»¶

1. æå¼ [MongoDB ä¸è½½é¡µé¢](https://www.mongodb.com/try/download/community) > `Version`ï¼çæ¬ï¼éæ© `5.0.0` > `Platform`ï¼å¹³å°ï¼éæ© `Source (tgz)`ï¼æºç ï¼> ç¹å» `Download`ï¼ä¸è½½ï¼æ `Copy Link`ï¼å¤å¶ä¸è½½é¾æ¥ï¼åéè¿ `wget` ä¸è½½ï¼

   ![download-1](../static/exclusive/mongodb/download-1.png)

2. è§£åæºç åç¼©å `mongodb-src-r5.0.0.tar.gz`ï¼

   ```sh
   tar -xf mongodb-src-r5.0.0.tar.gz -C /usr/local/
   ```

### 2. å®è£ç¼è¯æéä¾èµ

ç±äº MongoDB å®æ¹æ²¡ææä¾ openEuler çäºè¿å¶åç¼©åï¼æä»¥éè¦èªè¡ç¼è¯ã

æç§å®æ¹ææ¡£çè¦æ±åç³»ç»çï¼ç¼è¯ MongoDB éè¦ä»¥ä¸ä¾èµï¼

- GCC 8.2 ææ´æ°
- libcurl-devel
- Python 3.7.x å Pip æ¨¡å
- openssl-devel

1. æ£æ¥ä¾èµçæ¬ï¼

   ```sh
   gcc --version # éè¦æ´æ°ï¼openEuler 20.03 (LTS-SP1) éè¦ï¼æ´æ° openEuler çæ¬ä¸éè¦ï¼
   python3 --version # ç¬¦åè¦æ±
   pip3 --version # ç¬¦åè¦æ±
   ```

   ![required-1](../static/exclusive/mongodb/required-1.png)

2. å®è£ç¸å³ä¾èµï¼

   ```sh
   sudo dnf install libcurl-devel scons
   ```

   ![required-2](../static/exclusive/mongodb/required-2.png)

3. æå¼ [GCC éååè¡¨](https://gcc.gnu.org/mirrors.html) > éæ©ä¸ä¸ªéåç«ï¼

   ![required-3](../static/exclusive/mongodb/required-3.png)

4. ä»¥éè¹è¿ä¸ªéåç«ä¸ºä¾ï¼ç¹å» `release` > `gcc-11.1.0` > ç¹å» `gcc-11.1.0.tar.gz` ä¸è½½ GCC æºç ï¼

   ![required-4](../static/exclusive/mongodb/required-4.png)

   ![required-5](../static/exclusive/mongodb/required-5.png)

5. è§£åæºç åç¼©å `gcc-11.1.0.tar.gz` å° `/usr/local/` ç®å½ï¼

   ::: tip â¹ï¸ æç¤º

   ä»¥ä¸å½ä»¤è¯·å¨ root ç¨æ·ä¸æ§è¡ï¼

   ```sh
   su - root
   ```

   :::

   ```sh
   tar -xf gcc-11.1.0.tar.gz -C /usr/local/
   cd /usr/local/gcc-11.1.0 # åæ¢å°è§£åç®å½
   ```

6. æ§è¡ä»¥ä¸æä»¤ä»¥ä¸è½½å®è£ GCC æéè¦çä¾èµåï¼å¦ gmpãmpfrãmpc ç­ï¼ï¼

   ```sh
   ./contrib/download_prerequisites
   ```

   ::: tip â¹ï¸ æç¤º

   æ§è¡æ­¤å½ä»¤éè¦ç¡®ä¿ç³»ç»å®è£äºç¸å³ä¾èµï¼å¦åä½¿ç¨ä»¥ä¸å½ä»¤å®è£ï¼

   ```sh
   dnf install bzip2 wget
   ```

   :::

   ![required-6](../static/exclusive/mongodb/required-6.png)

7. æå¨åå»ºä¸ä¸ªç®å½ï¼ç¨äºå­æ¾ç¼è¯ GCC æºç åçæçæä»¶ï¼

   ```sh
   mkdir /usr/local/gcc-build-11.1.0
   cd /usr/local/gcc-build-11.1.0
   ```

8. ç±äº GCC ç¼è¯å¨æ¯æå¤ç§ç¼ç¨è¯­è¨çç¼è¯ï¼èå®éæåµä¸­æä»¬å¯è½åªéè¦ç¼è¯ C å C++ ä¸¤ç§ç¼ç¨è¯­è¨ï¼æéè¦è¿è¡éç½®ï¼

   ```sh
   ../gcc-11.1.0/configure --enable-checking=release --enable-languages=c,c++ --disable-multilib
   ```

   ![required-7](../static/exclusive/mongodb/required-7.png)

   åæ¶ä¼çæ `Makefile` åç¸å³æä»¶ï¼

   ![required-8](../static/exclusive/mongodb/required-8.png)

9. ä½¿ç¨ `make` å½ä»¤ç¼è¯ GCCï¼

   ```sh
   make
   ```

   ::: tip â¹ï¸ æç¤º

   æ­¤è¿ç¨å°éå¸¸èæ¶ï¼2 å°æ¶ææ´é¿ï¼ãè¥ä½¿ç¨ SSH è¿ç¨è¿æ¥è¯·å¡å¿éç½®å¹¶ä½¿ç¨ä¸é´æ­ä¼è¯æå¡ï¼å·ä½æä½è¯·åé [3. ä¸é´æ­ä¼è¯æå¡éç½®](../rookie/basic-cfg.md#_3-ä¸é´æ­ä¼è¯æå¡éç½®)ã

   :::

   ![required-9](../static/exclusive/mongodb/required-9.png)

10. æ§è¡ä»¥ä¸å½ä»¤å®è£ GCCï¼

    ```sh
    make install
    ```

11. éå¯è®¡ç®æºï¼æ¥ç GCC çæ¬ä¿¡æ¯ï¼

    ```sh
    reboot
    gcc --version
    ```

    ![required-10](../static/exclusive/mongodb/required-10.png)

12. å®è£ Python ç¸å³æ¨¡åï¼

    ```sh
    cd /usr/local/mongodb-src-r5.0.0
    python3 -m pip install -r etc/pip/compile-requirements.txt
    ```

    ![required-11](../static/exclusive/mongodb/required-11.png)

### 3. ç¼è¯ MongoDB

æ§è¡ä»¥ä¸å½ä»¤ï¼

```sh
cd /usr/local/mongodb-src-r5.0.0
python3 buildscripts/scons.py DESTDIR=/usr/local/mongo install-core --disable-warnings-as-errors
```

::: tip â¹ï¸ æç¤º

æ­¤è¿ç¨å°éå¸¸èæ¶ï¼2 å°æ¶ææ´é¿ï¼ãè¥ä½¿ç¨ SSH è¿ç¨è¿æ¥è¯·å¡å¿éç½®å¹¶ä½¿ç¨ä¸é´æ­ä¼è¯æå¡ï¼å·ä½æä½è¯·åé [3. ä¸é´æ­ä¼è¯æå¡éç½®](../rookie/basic-cfg.md#_3-ä¸é´æ­ä¼è¯æå¡éç½®)ã

:::

å½è¾åº `scons: done building targets.` è¯´æç¼è¯æåï¼

![build](../static/exclusive/mongodb/build.png)

### 4. éç½® MongoDB

ç¼è¯å¹¶å®è£ MongoDB åï¼è¿éè¦åä¸äºç¯å¢åéä»¥åç®å½æéç¸å³çéç½®ã

::: tip â¹ï¸ æç¤º

ä»¥ä¸å½ä»¤è¯·å¨éè¦ç®¡ç MongoDB çç¨æ·ä¸æ§è¡ã

å¯ä»¥äºååå»ºç®¡ç MongoDB çç¨æ·ã

:::

#### 4-1. è®¾ç½®ç¯å¢åé

1. MongoDB çå¯æ§è¡æä»¶ä½äº `/usr/local/mongo/bin` ç®å½ä¸ï¼å¯å°å¶æ·»å å° `PATH` è·¯å¾ä¸­ï¼

   ```sh
   vim ~/.bash_profile
   ```

   ```sh
   export PATH=/usr/local/mongodb/bin:$PATH
   ```

   ![cfg-1](../static/exclusive/mongodb/cfg-1.png)

2. éæ°ç»å½ï¼éªè¯ææï¼

   ```sh
   echo $PATH
   ```

   ![cfg-2](../static/exclusive/mongodb/cfg-2.png)

#### 4-2. éç½®ç®å½

é»è®¤æåµä¸ MongoDB å¯å¨åä¼åå§åä»¥ä¸ä¸¤ä¸ªç®å½ï¼

- `/var/lib/mongodb` ââ æ°æ®å­å¨ç®å½
- `/var/log/mongodb` ââ æ¥å¿æä»¶ç®å½

å¨å¯å¨åå¯ä»¥ååå»ºè¿ä¸¤ä¸ªç®å½å¹¶è®¾ç½®å½åç¨æ·æè¯»åæéï¼

```sh
sudo mkdir -p /var/lib/mongo
sudo mkdir -p /var/log/mongodb
sudo chown `whoami` /var/lib/mongo # è®¾ç½®æé
sudo chown `whoami` /var/log/mongodb # è®¾ç½®æé
```

![cfg-3](../static/exclusive/mongodb/cfg-3.png)

## å¯å MongoDB æ°æ®åº

1. ä½¿ç¨ä»¥ä¸å½ä»¤å¯å¨ MongoDBï¼

   ```sh
   mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --fork
   ```

   ![start-1](../static/exclusive/mongodb/start-1.png)

2. ä½¿ç¨ä»¥ä¸å½ä»¤è¿å¥ MongoDB åå°ç®¡ç Shellï¼

   ```sh
   mongo
   ```

   ![start-2](../static/exclusive/mongodb/start-2.png)

   MongoDB Shell æ¯ MongoDB èªå¸¦çäº¤äºå¼ JavaScript Shellï¼ç¨æ¥å¯¹ MongoDB è¿è¡æä½åç®¡ççäº¤äºå¼ç¯å¢ãå¯æ§è¡ä¸äºç®åçç®æ°è¿ç®ï¼

   ![start-3](../static/exclusive/mongodb/start-3.png)

3. ä½¿ç¨ä»¥ä¸å½ä»¤å³é­ MongoDBï¼

   ```sh
   mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --shutdown
   ```

   ![start-4](../static/exclusive/mongodb/start-4.png)

## æ¥ä¸æ¥...

ð» æ­åï¼ä½ å·²ç»æåå¨ openEuler ä¸é¨ç½²äº MongoDBãå¦ææ¨æ¯åå­¦èï¼å¯ä»¥ç±æ­¤å¼å§å­¦ä¹ æä½ MongoDBï¼å¦ææ¨å·²ç»å¯¹ MongoDB éå¸¸çæäºï¼ç¸ä¿¡æ¨å¾å¿«å°±å¯ä»¥å®æå¶å®çéç½®ä»¥åé¡¹ç®çé¨ç½²ã
