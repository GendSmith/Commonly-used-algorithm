### 为什么握手是三次，挥手是四次？

三次握手的第二次把四次挥手的二三次合并起来了   
至于为什么要四次  
是因为一端发了FIN表示自己不需要东西了  
但是另一端还想发东西  
如果二三次合并成一次了  
那么就没给机会让想发东西的另一端有机会发送   
所以挥手拆成了四次  
留了一个间隙给另一端
握手因为不需要这个“还想发东西”的操作  
就合并成了三次
也就是“剪不断理还乱，是离愁”