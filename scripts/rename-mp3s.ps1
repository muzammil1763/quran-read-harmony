param(
    [Parameter(Mandatory=$true)]
    [string]$Dir
)

$files = Get-ChildItem -Path $Dir -Filter "*.mp3" | Sort-Object {
    if ($_.Name -match '^(\d+)') { [int]$matches[1] } else { 9999 }
}

if ($files.Count -eq 0) {
    Write-Host "No MP3 files found in $Dir"
    exit 1
}

Write-Host "Found $($files.Count) MP3 files. Renaming..."

$index = 1
foreach ($file in $files) {
    $newName = "{0:D3}.mp3" -f $index
    $newPath = Join-Path $Dir $newName

    if ($file.Name -eq $newName) {
        Write-Host "  OK   $($file.Name)"
    } else {
        Rename-Item -Path $file.FullName -NewName $newName
        Write-Host "  DONE $($file.Name) -> $newName"
    }
    $index++
}

Write-Host ""
Write-Host "Done. $($files.Count) files renamed."
