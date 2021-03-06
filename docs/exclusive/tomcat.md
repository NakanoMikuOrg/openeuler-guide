---
sidebarDepth: 2
---

# Apache Tomcat

> ### ð ä¼¼èè½ç¼æ¨ï¼å¦é©¹ä¸ä¼è¾
>
> è¿ä¸å°èæä»¬å°è®¨è®ºä»ä¹æ¯ Apache Tomcat ä»¥åå¦ä½å¨ openEuler ä¸é¨ç½²å®ã

> ### ð è¿ä¸èå°ä¼è®¨è®ºï¼
>
> ::: details ç®å½
>
> [[toc]]
>
> :::

## ä»ä¹æ¯ Apache Tomcatï¼

å®æ¹çå®ä¹å¦ä¸ ââ [Apache Tomcat](https://tomcat.apache.org/) æ¯ [Jakarta Servlet](https://projects.eclipse.org/projects/ee4j.servlet)ã[Jakarta Server Pagesï¼JSPï¼](https://projects.eclipse.org/projects/ee4j.jsp)ã[Jakarta Expression Language](https://projects.eclipse.org/projects/ee4j.el)ã[Jakarta WebSocket](https://projects.eclipse.org/projects/ee4j.websocket)ã[Jakarta Annotations](https://projects.eclipse.org/projects/ee4j.ca) å [Jakarta Authentication](https://projects.eclipse.org/projects/ee4j.authentication) è§èçå¼æºå®ç°ãè¿äºè§èæ¯ [Jakarta EE](https://projects.eclipse.org/projects/ee4j.jakartaee-platform) å¹³å°çä¸é¨åã

ç®åæ¥è¯´ï¼å¯ä»¥å° Apache Tomcat è§ä¸º Java Web åºç¨æå¡å¨è½¯ä»¶ãå¸¸è§çå¶å® Java åºç¨æå¡å¨è½¯ä»¶è¿æï¼

- [Oracle WebLogic Server](https://www.oracle.com/cn/java/weblogic/)
  - å¤§å JavaEE / Jakarta EE æå¡å¨
  - æ¯æææç JavaEE / Jakarta EE è§è
  - æ¶è´¹
- [IBM WebSphere Application Server](https://www.ibm.com/cn-zh/cloud/websphere-application-server)
  - å¤§å JavaEE / Jakarta EE æå¡å¨
  - æ¯æææç JavaEE / Jakarta EE è§è
  - æ¶è´¹
- [çº¢å¸½ JBoss ä¼ä¸åºç¨å¹³å°](https://www.redhat.com/zh/technologies/jboss-middleware/application-platform)
  - å¤§å JavaEE / Jakarta EE æå¡å¨
  - æ¯æææç JavaEE / Jakarta EE è§è
  - æ¶è´¹

ä¸ä¸è¿°æå¡å¨è½¯ä»¶ç¸æ¯ï¼Apache Tomcat æ¯å¼æºåè´¹çï¼ä½ä»ä»æ¯æå°éç JavaEE / Jakarta EE è§èã

### çæ¬ä¸åå²

| äº§åçº¿ |    ç¨³å®æ¥æ    |                                             ç®ä»                                             | ææ°çæ¬ |  ææ°åå¸æ¥æ  |
| :----: | :------------: | :------------------------------------------------------------------------------------------: | :------: | :------------: |
|  3.0   |      1999      | é¦åçæ¬ãåå¹¶äº Sun æèµ ç Java Web Server ä»£ç å ASFï¼å¹¶å®ç°äº Servlet 2.2 å JSP 1.1 è§è |  3.3.2   |  2004 / 3 / 9  |
|  4.1   |  2002 / 9 / 6  |                              å®ç°äº Servlet 2.3 å JSP 1.2 è§è                              |  4.1.40  | 2009 / 6 / 25  |
|  5.0   | 2003 / 12 / 3  |                        å®ç°äº Servlet 2.4ã JSP 2.0 ä»¥å EL 1.1 è§è                         |  5.0.30  | 2004 / 8 / 30  |
|  5.5   | 2004 / 11 / 10 |  ä¸ä¸º J2SE 5.0 è®¾è®¡ãåå«å¨äº Eclipse JDT ä¸­ï¼å¹¶è¿è¡ Tomcat å¨æ²¡æå®è£å®æ´ JDK çæåµä¸è¿è¡  |  5.5.36  | 2012 / 10 / 10 |
|  6.0   | 2007 / 2 / 28  |                         å®ç°äº Servlet 2.5ãJSP 2.1 ä»¥å EL 2.1 è§è                         |  6.0.53  |  2017 / 4 / 7  |
|  7.0   | 2011 / 1 / 14  |                         å®ç°äº Servlet 3.0ãJSP 2.2 ä»¥å EL 2.2 è§è                         | 7.0.109  | 2021 / 4 / 26  |
|  8.0   | 2014 / 06 / 25 |                   å®ç°äº Servlet 3.1ãJSP 2.3ãEL 3.0 ä»¥å WebSocket è§è                    |  8.0.53  |  2018 / 7 / 5  |
|  8.5   | 2016 / 6 / 13  |              æ·»å å¯¹ HTTP/2ãOpenSSL for JSSEãTLS èæä¸»æºå JASPIC 1.1 çæ¯æ               |  8.5.69  |  2021 / 7 / 5  |
|  9.0   | 2018 / 1 / 18  |                   å®ç°äº Servlet 4.0ãJSP 2.4ï¼å¾å®ï¼ãEL 3.1ï¼å¾å®ï¼è§è                    |  9.0.50  |  2021 / 7 / 2  |
|  10.0  |  2021 / 2 / 2  |                   å®ç°äº Servlet 5.0ãJSP 3.0ï¼å¾å®ï¼ãEL 4.0ï¼å¾å®ï¼è§è                    |  10.0.8  |  2021 / 7 / 2  |

å¶ä¸­ 8.5 ä¹åççæ¬å·²ç»ä¸åæ¯æï¼10.0 ä¸ºå½åçæ¬ãç®åä¼ä¸ä¸­ç Tomcat æå¡å¨ä¸»æµçæ¬è¿æ¯ 8.xï¼è openEuler ä»åºä¸­ççæ¬ä¸º 9.xãæ¬æåä¼å¯¹è¿ä¸¤ä¸ªçæ¬è¿è¡é¨ç½²æ¼ç¤ºã

## å®è£ Apache Tomcat

### éè¿äºè¿å¶åç¼©åå®è£ï¼8.xï¼

1. æå¼ [Apache Tomcat å®æ¹ç½ç«](https://tomcat.apache.org/)ï¼

   ![tomcat-1](../static/exclusive/tomcat/tomcat-1.png)

2. ç¹å»ä¾§è¾¹æ  `Download` ä¸ç `Tomcat 8`ï¼

   ![tomcat-2](../static/exclusive/tomcat/tomcat-2.png)

3. ç¹å» `Core` ä¸ç `tar.gz` æå¤å¶ä¸è½½é¾æ¥åéè¿ Wget ä¸è½½åç¼©åï¼

   ```sh
   wget https://apache.website-solution.net/tomcat/tomcat-8/v8.5.69/bin/apache-tomcat-8.5.69.tar.gz # æ¿æ¢ä¸ºå¤å¶çä¸è½½é¾æ¥
   ```

   ![tomcat-3](../static/exclusive/tomcat/tomcat-3.png)

4. å°åç¼©åè§£åï¼

   ```sh
   tar -zxvf apache-tomcat-8.5.69.tar.gz # æ¿æ¢ä¸ºä¸è½½ççæ¬
   ```

   ![tomcat-4](../static/exclusive/tomcat/tomcat-4.png)

5. åå»ºç¸å³ç®å½å¹¶ç§»å¨ Tomcat å°åéä½ç½®ï¼

   ```sh
   sudo mkdir /usr/local/tomcat
   sudo mv apache-tomcat-8.5.69 /usr/local/tomcat/ # æ¿æ¢ä¸ºä¸è½½ççæ¬
   ```

   ![tomcat-5](../static/exclusive/tomcat/tomcat-5.png)

6. å°è¯å¯å¨ Tomcatï¼

   ```sh
   cd /usr/local/tomcat/apache-tomcat-8.5.69/bin # æ¿æ¢ä¸ºä¸è½½ççæ¬
   sudo ./startup.sh # å¯å¨ Tomcat
   ```

   ::: tip â¹ï¸ æç¤º

   éè¦åéç½® Java ç¯å¢ã

   :::

   ![tomcat-6](../static/exclusive/tomcat/tomcat-6.png)

7. éè¿æµè§å¨è®¿é® `localhost:8080` æå¯¹åºç«¯å£ï¼éªè¯æ¯å¦æåãè¥çå°ä»¥ä¸é¡µé¢å³è¡¨ç¤ºæåï¼

   ![tomcat-7](../static/exclusive/tomcat/tomcat-7.png)

8. å³é­ Tomcatï¼

   ```sh
   ./shutdown.sh
   ```

   ![tomcat-8](../static/exclusive/tomcat/tomcat-8.png)

### éè¿åç®¡çå¨å®è£ï¼9.xï¼

1. å®è£ Tomcatï¼

   ```sh
   sudo dnf install tomcat
   ```

   ![tomcat-9](../static/exclusive/tomcat/tomcat-9.png)

2. éè¿ä»¥ä¸å½ä»¤å¼å¯ Tomcatï¼

   ```sh
   sudo systemctl start tomcat.service
   systemctl status tomcat.service
   ```

   ![tomcat-10](../static/exclusive/tomcat/tomcat-10.png)

3. éè¿æµè§å¨è®¿é® `localhost:8080` æå¯¹åºç«¯å£ï¼éªè¯æ¯å¦æåãè¥çå°ä»¥ä¸é¡µé¢å³è¡¨ç¤ºæåï¼

   ![tomcat-11](../static/exclusive/tomcat/tomcat-11.png)

4. å³é­ Tomcatï¼

   ```sh
   sudo systemctl stop tomcat.service
   ```

   ![tomcat-12](../static/exclusive/tomcat/tomcat-12.png)

## æ¥ä¸æ¥...

ð» æ­åï¼ä½ å·²ç»æåå¨ openEuler ä¸é¨ç½²äºåºæ¬ç Tomcat æå¡ãå¦ææ¨æ¯åå­¦èï¼å¯ä»¥ä»äºè§£ Tomcat åºæ¬çç®å½ç»æå¼å§å­¦ä¹  Tomcatï¼å¦ææ¨å·²ç»å¯¹ Tomcat éå¸¸çæäºï¼ç¸ä¿¡æ¨å¾å¿«å°±å¯ä»¥å®æ Java Web åºç¨çé¨ç½²ã
