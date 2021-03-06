---
sidebarDepth: 2
---

# åºç¡éç½®

> ### ðï¸ è·¯æ¼«æ¼«å¶ä¿®è¿å®ï¼å¾å°ä¸ä¸èæ±ç´¢
>
> è¿ä¸å°èæä»¬å°è®¨è®ºå¦ä½å®è£åºæ¬ç openEuler åå¦ä½å®æå®è£å¾å½¢çé¢ä¹åçå¶å®éç½®ãéè¿è¿äºéç½®ï¼å³ä½¿ä¸å®è£å¾å½¢çé¢èæ¯éè¿è¿ç¨è¿æ¥ï¼SSHï¼çæ¹å¼ä¹å¯ä»¥è½»æ¾å°ä½¿ç¨ openEulerã

> ### ð è¿ä¸èå°ä¼è®¨è®ºï¼
>
> ::: details ç®å½
>
> [[toc]]
>
> :::

## 1. ç½ç»éç½®

é¦åæä»¬è¦è¿æ¥ç½ç»ï¼å¹¶å° IP å°ååºå®ä¸æ¥ãè¿æ ·åçå¥½å¤æ¯éè¿ SSH è¿ç¨è¿æ¥æç±»ä¼¼æåµçæ¶å IP å°åä¸ä¼åæ¥åå»ï¼é æä¸æ¹ä¾¿ã

### 1-1. è¿æ¥ç½ç»

ä½¿ç¨ `nmtui` å½ä»¤å³å¯ã

1. å¨ç»ç«¯æ§è¡ `nmtui` è¿è¡ç½ç»éç½®å·¥å·ï¼

   ```sh
   nmtui
   ```

2. éæ© `Activate a connection`ï¼å¯ç¨è¿æ¥ï¼å¹¶åè½¦ `Enter`ï¼

   ![nmtui-1](../static/rookie/basic-cfg/nmtui-1.png)

   ::: tip â¹ï¸ æç¤º

   é¨åæªå¾æ¥èªå¶å®åè¡çï¼ä¸è¿ä¸ç¨æå¿ï¼é¤è¯­è¨åéè²ä¹å¤é½æ¯ä¸æ ·çã

   :::

3. éæ©è¦è¿æ¥çç½ç» > éæ© `Activate`ï¼å¯ç¨ï¼å¹¶åè½¦ `Enter`ï¼

   ![nmtui-2](../static/rookie/basic-cfg/nmtui-2.png)

4. è¥ä¸ºæ çº¿è¿æ¥ï¼åéè¦è¾å¥ Wifi å¯ç  > éæ© `OK`ï¼ç¡®å®ï¼å¹¶åè½¦ `Enter`ï¼ç¨ç­çå»å³å¯è¿æ¥æ çº¿ç½ç»:

   ![nmtui-3](../static/rookie/basic-cfg/nmtui-3.png)

5. éæ© `BACK`ï¼è¿åï¼å¹¶åè½¦ `Enter` > éæ© `QUIT`ï¼éåºï¼å¹¶åè½¦ `Enter` å³å¯éåºç½ç»éç½®å·¥å·ï¼

   ![nmtui-4](../static/rookie/basic-cfg/nmtui-4.png)

### 1-2. åºå® IP å°å

å¯ä»¥éè¿ `nmtui` åºå® IP å°åï¼ä¹å¯ä»¥éè¿æå¨ä¿®æ¹éç½®æä»¶çæ¹å¼å®æã

#### 1-2-1. éè¿ nmtui

1. å¨ç»ç«¯æ§è¡ `nmtui` è¿è¡ç½ç»éç½®å·¥å·ï¼

   ```sh
   sudo nmtui # éè¦ root æé
   ```

2. éæ© `Edit a connection`ï¼ç¼è¾è¿æ¥ï¼å¹¶åè½¦ `Enter`ï¼

   ![nmtui-5](../static/rookie/basic-cfg/nmtui-5.png)

3. éæ©å¯¹åºçè¿æ¥ > éæ© `Edit...`ï¼ç¼è¾...ï¼ï¼

   ![nmtui-6](../static/rookie/basic-cfg/nmtui-6.png)

4. å° `IPv4 CONFIGURATION`ï¼IPv4 éç½®ï¼æ´æ¹ä¸º `Manual`ï¼æå¨ï¼> å¨ `Addresses`ï¼å°åï¼ä¸­å¡«å¥åºå®ä¸æ¥ç IP å°å > å¨ `Gateway`ï¼ç½å³ï¼ä¸­å¡«å¥ç½å³å°åï¼è·¯ç±å¨ç IP å°åï¼ > å¨ `DNS servers`ï¼DNS æå¡å¨ï¼ä¸­å¡«å¥ `DNS æå¡å¨`ï¼`8.8.8.8` ä¸ºè°·æ­æä¾çå¬å± DNS æå¡å¨ï¼ï¼

   ![nmtui-7](../static/rookie/basic-cfg/nmtui-7.png)

5. éæ© `OK`ï¼ç¡®å®ï¼å¹¶åè½¦ `Enter` ä¿å­éç½®ï¼

   ![nmtui-8](../static/rookie/basic-cfg/nmtui-8.png)

6. éæ© `BACK`ï¼è¿åï¼å¹¶åè½¦ `Enter` > éæ© `QUIT`ï¼éåºï¼å¹¶åè½¦ `Enter` å³å¯éåºç½ç»éç½®å·¥å·

#### 1-2-2. éè¿ä¿®æ¹ç½ç»éç½®æä»¶

1. ä¿®æ¹å¨ `/etc/sysconfig/network-scripts` ç®å½ä¸ç½å¡å¯¹åºçéç½®æä»¶ï¼

   ```sh
   sudoedit /etc/sysconfig/network-scripts/ifcfg-enp0s3 # æ¿æ¢ä¸ºå¯¹åºç½å¡å
   ```

   ä¿®æ¹ä¸ºä»¥ä¸åå®¹ï¼

   ```conf {4,10-15}
   TYPE=Ethernet
   PROXY_METHOD=none
   BROWSER_ONLY=no
   BOOTPROTO=static # ä½¿ç¨éæ IP å°å
   DEFROUTE=yes
   IPV4_FAILURE_FATAL=no
   NAME=enp0s3
   UUID=378885da-c689-441c-908b-239420641282
   DEVICE=enp0s3
   ONBOOT=yes # å¼æºå¯å¨
   IPADDR=192.168.1.151 # IP å°åï¼æ ¹æ®å®éæåµå¡«åï¼
   NETMASK=255.255.255.0 # å­ç½æ©ç 
   GATEWAY=192.168.1.1 # ç½å³ï¼æ ¹æ®å®éæåµå¡«åï¼
   DNS1=8.8.8.8 # DNS æå¡å¨
   DNS2=192.168.1.1 # DNS æå¡å¨
   ```

   ![network-file-1](../static/rookie/basic-cfg/network-file-1.png)

2. éå¯ç½å¡ï¼

   ```sh
   sudo ifdown enp0s3 && sudo ifup enp0s3 # å³é­å¹¶ç«å³å¯å¨ç½å¡
   ```

   ![network-file-2](../static/rookie/basic-cfg/network-file-2.png)

#### 1-2-3. æ£æ¥ç½ç»è¿éæ§

1. æ¥ç IP å°åï¼

   ```sh
   ip addr
   ```

   ![ping-1](../static/rookie/basic-cfg/ping-1.png)

2. éè¿ `ping` å½ä»¤æµè¯ç½ç»è¿éæ§ï¼

   ```sh
   ping www.huawei.com
   ```

   ç¨ç­çå»ï¼è¥è½çå°æ°æ®è¿åï¼å³è¯´æå·²ç»èç½ï¼

   ![ping-2](../static/rookie/basic-cfg/ping-2.png)

   ::: tip â¹ï¸ æç¤º

   ä¸ Windows ä¸åçæ¯ï¼éè¦æä¸ `Ctrl` + `C` æå¨éåº `ping` å½ä»¤ã

   :::

### 1-3. ç»å®ä¸»æºå

1. æ¥çä¸»æºåï¼

   ```sh
   hostname
   ```

   ![hostname-1](../static/rookie/basic-cfg/hostname-1.png)

2. ç¼è¾ `/etc/hosts` æä»¶ï¼å°ä¸»æºåå IP å°åå¯¹åºï¼

   ```sh
   sudoedit /etc/hosts
   ```

   å¨æä»¶æ«å°¾æ·»å ä¸è¡ï¼

   ```conf
   192.168.1.151   hostname # æ¿æ¢ä¸ºå¯¹åº IP å°ååä¸»æºå
   ```

   ![hostname-2](../static/rookie/basic-cfg/hostname-2.png)

3. æµè¯éè¿ä¸»æºåç½ç»è¿éæ§ï¼

   ```sh
   ping hostname
   ```

   ![hostname-3](../static/rookie/basic-cfg/hostname-3.png)

## 2. è¿ç¨æ§å¶éç½®

SSHï¼**S**ecure **Sh**ellï¼æ¯ä¸ç§è½å¤ä»¥å®å¨çæ¹å¼æä¾è¿ç¨ç»å½çåè®®ï¼ä¹æ¯ç®åè¿ç¨ç®¡ç Linux ç³»ç»çé¦éæ¹å¼ãä½¿ç¨ SSH æ¥è¿ç¨ç®¡ç openEuler éè¦é¨ç½²éç½® sshd æå¡ç¨åºãsshd æ¯åºäº SSH åè®®å¼åçä¸æ¬¾è¿ç¨ç®¡çæå¡ç¨åºï¼æä¾ä¸¤ç§å®å¨éªè¯çæ¹æ³ï¼

- åºäºå£ä»¤çéªè¯ ââ ç¨è´¦æ·åå¯ç æ¥éªè¯ç»å½
- åºäºå¯é¥çéªè¯ ââ éè¦å¨æ¬å°çæå¯é¥å¯¹ï¼ç¶åæå¯é¥å¯¹ä¸­çå¬é¥ä¸ä¼ è³æå¡å¨ï¼å¹¶ä¸æå¡å¨ä¸­çå¬é¥è¿è¡æ¯è¾

é»è®¤æåµä¸ SSH æ¯å¼ç®±å³ç¨çãä½ä¸ºäºæ¹ä¾¿æä»¬å°éç½®åºäºå¯é¥çéªè¯ä»¥èçè¾å¥å¯ç è¿ä¸æ­¥éª¤ã

1. å°è¯éè¿ SSH ç»å½ openEulerï¼

   ```sh
   ssh username@192.168.1.151 # æ¿æ¢ä¸ºå¯¹åºè´¦æ·åå IP å°å
   ```

   ![ssh-1](../static/rookie/basic-cfg/ssh-1.png)

2. å¯éè¿ä¿®æ¹ `/etc/ssh/sshd_config` éç½® sshd æå¡ï¼

   ```sh
   sudoedit /etc/ssh/sshd_config
   ```

   ç±äºæä»¬å¨æµè¯ç¯å¢ä¸­å¯¹å®å¨æ§è¦æ±ä¸é«ï¼ä¿æé»è®¤å³å¯ã

3. å¨å®¢æ·ç«¯è¾å¥æ§è¡ä»¥ä¸å½ä»¤å¹¶ä¸è·¯åè½¦ `Enter` ä»¥çæå¯é¥å¯¹ï¼

   ```sh
   ssh-keygen
   cat ~/.ssh/id_rsa.pub # æ¥çå¬é¥æä»¶
   ```

4. æå®¢æ·ç«¯ä¸­çæçå¬é¥ä¼ éè³ openEulerï¼

   ```sh
   ssh-copy-id username@192.168.1.151 # æ¿æ¢ä¸ºå¯¹åºè´¦æ·åå IP å°åï¼æ§è¡åä¼æç¤ºè¾å¥å¯¹åºç¨æ·çå¯ç 
   ```

   ::: tip â¹ï¸ æç¤º

   æ¯æ·»å ä¸ä½è´¦æ·é½éè¦éæ°æ§è¡è¿ä¸æ­¥ï¼å¦åæ·»å  root ç¨æ·ä½¿ç¨åºäºå¯é¥çéªè¯ï¼

   ```sh
   ssh-copy-id root@192.168.1.151 # æ¿æ¢ä¸ºå¯¹åº IP å°åï¼æ§è¡åä¼æç¤ºè¾å¥ root ç¨æ·çå¯ç 
   ```

   :::

   ![ssh-2](../static/rookie/basic-cfg/ssh-2.png)

5. éæ°éè¿ SSH ç»å½ openEulerï¼åç°å·²ç»ä¸éè¦å¯ç äºï¼

   ![ssh-3](../static/rookie/basic-cfg/ssh-3.png)

## 3. ä¸é´æ­ä¼è¯æå¡éç½®

å½ä¸è¿ç¨ä¸»æºçä¼è¯è¢«å³é­æ¶ï¼åç§åå é½æå¯è½å¯¼è´è¿ç§æåµåçï¼å¦ç½ç»æ³¢å¨ï¼ï¼å¨è¿ç¨ä¸»æºä¸è¿è¡çå½ä»¤ä¹éä¹è¢«ä¸­æ­ãæ¾ç¶è¿æ ·æ¯éå¸¸ä¸æ¹ä¾¿çï¼å°¤å¶æ¯å¨æ§è¡ä¸äºæ¶é´æ¯è¾æ§çä»»å¡çæ¶åã

é¤äºä¼ ç»ç [Screen](http://www.gnu.org/software/screen/) ï¼è¿ææ´ä¸ºç°ä»£åå¼ºå¤§ç [tmux](https://github.com/tmux/tmux)ï¼

tmux æ¯ä¸æ¬¾è½å¤å®ç°å¤çªå£è¿ç¨æ§å¶çå¼æºæå¡ç¨åºï¼ä¹å«ç»ç«¯å¤ç¨å¨ãç®åæ¥è¯´å°±æ¯ä¸ºäºè§£å³ç½ç»å¼å¸¸ä¸­æ­æä¸ºäºåæ¶æ§å¶å¤ä¸ªè¿ç¨ç»ç«¯çªå£èè®¾è®¡çç¨åºãç¨æ·è¿å¯ä»¥ä½¿ç¨ tmux åæ¶å¨å¤ä¸ªè¿ç¨ä¼è¯ä¸­èªç±åæ¢ï¼è½å¤åå°å®ç°å¦ä¸åè½ï¼

- ä¼è¯æ¢å¤ ââ å³ä¾¿ç½ç»ä¸­æ­ï¼ä¹å¯è®©ä¼è¯éæ¶æ¢å¤ï¼ç¡®ä¿ç¨æ·ä¸ä¼å¤±å»å¯¹è¿ç¨ä¼è¯çæ§å¶
- å¤çªå£ ââ æ¯ä¸ªä¼è¯é½æ¯ç¬ç«è¿è¡çï¼æ¥æåèªç¬ç«çè¾å¥è¾åºç»ç«¯çªå£ï¼ç»ç«¯çªå£åæ¾ç¤ºè¿çä¿¡æ¯ä¹å°è¢«åå¼éç¦»ä¿å­ï¼ä»¥ä¾¿ä¸æ¬¡ä½¿ç¨æ¶ä¾ç¶è½çå°ä¹åçæä½è®°å½
- ä¼è¯å±äº« ââ å½å¤ä¸ªç¨æ·åæ¶ç»å½å°è¿ç¨æå¡å¨æ¶ï¼ä¾¿å¯ä»¥ä½¿ç¨ä¼è¯å±äº«åè½è®©ç¨æ·ä¹é´çè¾å¥è¾åºä¿¡æ¯å±äº«

1. è¥æç§ [openEuler åºç¡å®è£](./basic-install.md) å®è£çç³»ç»ï¼é£ä¹é»è®¤å·²ç»å·²ç»å®è£äº tmuxï¼å¦åä½¿ç¨ä»¥ä¸å½ä»¤å®è£ï¼

   ```sh
   sudo dnf install tmux
   ```

2. ç´æ¥æ§è¡ `tmux` å½ä»¤å³å¯è¿å¥å° tmux ä¼è¯çªå£ä¸­ï¼

   ```sh
   tmux
   ```

   ![tmux-1](../static/rookie/basic-cfg/tmux-1.png)

3. æ§è¡ `exit` å½ä»¤å³å¯éåº tmux ä¼è¯çªå£

4. æ´å¤å½ä»¤ä»¥åéé¡¹æä¹ãå¿«æ·é®å¦ä¸ï¼

   å½ä»¤ä»¥åéé¡¹ï¼

   - `tmux ls` ââ æ¥çåå°æåªäºä¼è¯
   - `tmux detach` ââ å°ä¼è¯éèå°åå°
   - `tmux split-window` ââ åå»ºä¸ä¸åå²çå¤çªæ ¼ç»ç«¯
   - `tmux split-window -h` ââ åå»ºå·¦å³åå²çå¤çªæ ¼ç»ç«¯
   - `tmux select-pane -U` ââ åæ¢è³ä¸æ¹ççªæ ¼
   - `tmux select-pane -D` ââ åæ¢è³ä¸æ¹ççªæ ¼
   - `tmux select-pane -L` ââ åæ¢è³å·¦æ¹ççªæ ¼
   - `tmux select-pane -R` ââ åæ¢è³å³æ¹ççªæ ¼
   - `tmux swap-pane -U` ââ å°å½åçªæ ¼ä¸ä¸æ¹ççªæ ¼äºæ¢
   - `tmux swap-pane -D` ââ å°å½åçªæ ¼ä¸ä¸æ¹ççªæ ¼äºæ¢
   - `tmux swap-pane -L` ââ å°å½åçªæ ¼ä¸å·¦æ¹ççªæ ¼äºæ¢
   - `tmux swap-pane -R` ââ å°å½åçªæ ¼ä¸å³æ¹ççªæ ¼äºæ¢

   å¿«æ·é®ï¼æä¸ `Ctrl` + `B` ä¹ååæï¼ä¸æ¯ä¸èµ·æï¼ï¼

   - `%` ââ ååå·¦å³ä¸¤ä¸ªçªæ ¼
   - `"` ââ ååä¸ä¸ä¸¤ä¸ªçªæ ¼
   - `æ¹åé®` ââ åæ¢å°ä¸ä¸å·¦å³ç¸é»çä¸ä¸ªçªæ ¼
   - `;` ââ åæ¢è³ä¸ä¸ä¸ªçªæ ¼
   - `o` ââ åæ¢è³ä¸ä¸ä¸ªçªæ ¼
   - `{` ââ å°å½åçªæ ¼ä¸ä¸ä¸ä¸ªçªæ ¼ä½ç½®äºæ¢
   - `}` ââ å°å½åçªæ ¼ä¸ä¸ä¸ä¸ªçªæ ¼ä½ç½®äºæ¢
   - `x` ââ å³é­çªæ ¼
   - `!` ââ å°å½åçªæ ¼æåæç¬ç«çªå£
   - `q` ââ æ¾ç¤ºçªæ ¼ç¼å·

   æ­¤å¤ï¼è¿å¯éè¿ `Ctrl` + `B` + `æ¹åé®` è°æ´çªæ ¼å¤§å°ï¼è¥å­å¨å¤ä¸ªçªæ ¼ï¼ã

## 4. æ£æ¥å®¶ç®å½

æ£æ¥å®¶ç®å½ä¸çåä¸ªå¸¸è§ç®å½æ¯å¦å·²ç»åå»ºï¼è¥æ²¡æåééè¿ä»¥ä¸å½ä»¤æå¨åå»ºï¼

```sh
cd ~
ls -hl
mkdir -p Desktop Documents Downloads Music Pictures Videos
ls -hl # å¤æ¥ä¸ä¸
```

![check-home](../static/rookie/basic-cfg/check-home.png)
