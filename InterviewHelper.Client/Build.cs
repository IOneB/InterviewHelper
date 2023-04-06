using System.Diagnostics;

var directory = $@"{Directory.GetCurrentDirectory()}/../../../InterviewHelperClient";

var processInfo = new ProcessStartInfo
{
	FileName = "cmd",
	RedirectStandardInput = true,
	WorkingDirectory = directory
};

var process = Process.Start(processInfo)!;
process.StandardInput.WriteLine("npm run build & exit");
process.WaitForExit();