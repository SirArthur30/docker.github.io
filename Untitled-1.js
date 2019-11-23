& C:/Users/themi/AppData/Local/Programs/Python/Python37-32/python.exe -m pip install -U pylint --user
& C:/Users/themi/AppData/Local/Programs/Python/Python37-32/python.exe "c:/Users/themi/Desktop/New folder (2)/os.py"
& C:/Users/themi/AppData/Local/Programs/Python/Python37-32/python.exe "c:/Users/themi/Desktop/New folder (2)/test__osx_support.py"
npm install -g azure-clinpm install
sudo npm install -g azure-cli
npm install -g <path to downloaded tar file>
npm install -g azure-cli
npm install -g <c://user/arthur>
npm install -g <c:\\user\arthur>
npm install -g <c:\user\arthur>
docker run -it microsoft/azure-cli:0.10.17
azure --version
npm update -g azure-cli
echo '. <(azure --completion)' >> .zshrc
azure --completion >> ~/azure.completion.sh
echo 'source ~/azure.completion.sh' >> ~/.bash_profile
python -m pip install --upgrade pip
get -update
-update
get --upgrade
help
more.com
help*
github
user?
user*
users*
help*
get help*
.github
vs
dirms
dir
help
github desktop
atom
azure data studio
netsh int tcp show global
dirms
cd//
c
administrator
github
node
get process
get_process
win update
clear
cd\\
c:\\user\arthur
dir
wan
azure.completion.sh
get-help*
get-help
save-help
get-update
update-help
Update-Help
      [[-Module] <String[]>]
      [[-SourcePath] <String[]>]
      [-Recurse]
      [[-UICulture] <CultureInfo[]>]
      [-Credential <PSCredential>]
      [-UseDefaultCredentials]
      [-Force]
      [<CommonParameters>]
get-help-remoting
Get-Help Remoting
Enable-PSRemoting
https://github.com/Azure/Azure-Websites-Migration-Tool.git
https://github.com/Azure/Azure-Websites-Migration-Tool
http://schemas.microsoft.com/wbem/wsman/1/config/plugin
dir
help-get
get-help
about_updatable_help
Get-Help -Online
Get-Help
   [[-Name] <String>]
   [-Path <String>]
   [-Category <String[]>]
   [-Component <String[]>]
   [-Functionality <String[]>]
   [-Role <String[]>]
   -Parameter <String>
   [<CommonParameters>]Get-Help
   [[-Name] <String>]
   [-Path <String>]
   [-Category <String[]>]
   [-Component <String[]>]
   [-Functionality <String[]>]
   [-Role <String[]>]
   [-Online]
   [<CommonParameters>]Get-Help
   [[-Name] <String>]
   [-Path <String>]
   [-Category <String[]>]
   [-Component <String[]>]
   [-Functionality <String[]>]
   [-Role <String[]>]
   [-Online]
   [<CommonParameters>]
Powershell
Get-Help
Get-Help <powershell> -online
 Update-Help
Get-Help Get-Process -Online
Get-Process
   [[-Name] <String[]>]
   [-ComputerName <String[]>]
   [-Module]
   [-FileVersionInfo]
   [<CommonParameters>]
get-help
Get-Help Get-Process -Online
Get-Process
   [[-Name] <String[]>]
   [-ComputerName <String[]>]
   [-Module]
   [-FileVersionInfo]
   [<CommonParameters>]Get-Process
   [[-Name] <String[]>]
   [-IncludeUserName]
   [<CommonParameters>]
Get-Process
   [[-Name] <String[]>]
   [-IncludeUserName]
   [<CommonParameters>]VSIXConfigurationUpdater
VSIXConfigurationUpdater
Get-Process winword, explorer | Format-List *
Get-Process | Where-Object {$_.WorkingSet -gt 20000000}
$A = Get-Process Get-Process -InputObject $A | Format-Table -View priority
Get-Process powershell -ComputerName S1, localhost |`
ft @{Label = "NPM(K)"; Expression = {[int]($_.NPM / 1024)}},`
@{Label = "PM(K)"; Expression = {[int]($_.PM / 1024)}},`
@{Label = "WS(K)"; Expression = {[int]($_.WS / 1024)}},`
@{Label = "VM(M)"; Expression = {[int]($_.VM / 1MB)}},`
@{Label = "CPU(s)"; Expression = {if ($_.CPU) {$_.CPU.ToString("N")}}},`
Id, MachineName, ProcessName -Auto
NPM(K) PM(K) WS(K) VM(M) CPU(s)   Id MachineName ProcessName
------ ----- ----- ----- ------   -- ----------- -----------`
     6 23500 31340   142 1.70   1980 S1          powershell
     6 23500 31348   142 2.75   4016 S1          powershell
    27 54572 54520   576 5.52   4428 localhost   powershell
Get-Process powershell -FileVersionInfo
ProductVersion   FileVersion      FileName
--------------   -----------      --------`
6.1.6713.1       6.1.6713.1 (f... C:\WINDOWS\system32\WindowsPowerShell\v1.0\powershell.exe`

Get-Process SQL* -Module
Get-Process powershell -IncludeUserName
Handles      WS(K)   CPU(s)     Id UserName            ProcessName
-------      -----   ------     -- --------            -----------`
    782     132080     2.08   2188 DOMAIN01\user01     powershell
$p = Get-WmiObject Win32_Process -Filter "name='powershell.exe'"
$p.GetOwner()
__GENUS          : 2
__CLASS          : __PARAMETERS
__SUPERCLASS     :
__DYNASTY        : __PARAMETERS
__RELPATH        :
__PROPERTY_COUNT : 3
__DERIVATION     : {}
__SERVER         :
__NAMESPACE      :
__PATH           :
Domain           : DOMAIN01
ReturnValue      : 0
User             : user01
Get-Process powershell
Handles  NPM(K)    PM(K)      WS(K) VM(M)   CPU(s)     Id ProcessName
-------  ------    -----      ----- -----   ------     -- -----------`
308      26        52308      61780   567     3.18   5632 powershell
377      26        62676      63384   575     3.88   5888 powershell
Get-Process -Id $PID
Handles  NPM(K)    PM(K)      WS(K) VM(M)   CPU(s)     Id ProcessName
-------  ------    -----      ----- -----   ------     -- -----------`
396      26        56488      57236   575     3.90   5888 powershell
Get-Process | where {$_.mainWindowTitle} | Format-Table id, name, mainwindowtitle -autosize
public class Process : System.ComponentModel.Component
using System;
using System.Diagnostics;
using System.ComponentModel;
namespace MyProcessSample
{`
    class MyProcess`
    {`
        public static void Main()`
        {`
            Process myProcess = new Process();`
`
            try`
            {`
                myProcess.StartInfo.UseShellExecute = false;`
                // You can start any process, HelloWorld is a do-nothing example.`
                myProcess.StartInfo.FileName = "C:\\HelloWorld.exe";`
                myProcess.StartInfo.CreateNoWindow = true;`
                myProcess.Start();`
                // This code assumes the process you are starting will terminate itself. `
                // Given that is is started without a window so you cannot terminate it `
                // on the desktop, it must terminate itself or you can do it programmatically`
                // from this application using the Kill method.`
            }`
            catch (Exception e)`
            {`
                Console.WriteLine(e.Message);`
            }`
        }
    }
}
clear
using System;
using System.Diagnostics;
using System.ComponentModel;
namespace MyProcessSample
$ virtualenv --python=python2 custodian
$ source custodian/bin/activate
(custodian) $ pip install c7n$ virtualenv --python=python2 custodian
$ source custodian/bin/activate
(custodian) $ pip install c7n
$ virtualenv --python=python2 custodian
$ source custodian/bin/activate
(custodian) $ pip install c7n
get-help
get-update
Get-Update
Update-Help
dir
java_error_in_idea.hprof
.\java_error_in_idea.hprof
.\java_error_in_idea.hprof
.\java_error_in_idea.hprof
.\java_error_in_idea.hprof
.\java_error_in_idea.hprof
.\java_error_in_idea.hprof
get-help about_Command_Precedence
Import-Module
Function (provider)
Import-PSSession
Import-PSSession
clear
c//
help
macaffe
mcaffe
c://
