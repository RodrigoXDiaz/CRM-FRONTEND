Add-Type -AssemblyName System.Drawing
$path = "C:\Users\PC\Desktop\crm-frontend\src\assets\speed-logo.jpg"
$directory = [System.IO.Path]::GetDirectoryName($path)
if (-not (Test-Path $directory)) {
    New-Item -ItemType Directory -Force -Path $directory | Out-Null
}
$width = 520
$height = 520
$bitmap = New-Object Drawing.Bitmap $width, $height
$graphics = [Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::HighQuality

$rect = New-Object Drawing.Rectangle -ArgumentList 0, 0, $width, $height
$bgBrush = New-Object Drawing.Drawing2D.LinearGradientBrush -ArgumentList $rect, ([Drawing.Color]::FromArgb(255,41,77,202)), ([Drawing.Color]::FromArgb(255,231,72,155)), 45
$graphics.FillRectangle($bgBrush, $rect)
$bgBrush.Dispose()

$panelRect = New-Object Drawing.Rectangle -ArgumentList 40, 40, ($width - 80), ($height - 80)
$panelBrush = New-Object Drawing.Drawing2D.LinearGradientBrush -ArgumentList $panelRect, ([Drawing.Color]::FromArgb(150,14,23,42)), ([Drawing.Color]::FromArgb(110,12,74,110)), 135
$graphics.FillRectangle($panelBrush, $panelRect)
$panelBrush.Dispose()

$panelBorder = New-Object Drawing.Pen ([Drawing.Color]::FromArgb(210,255,255,255)), 4
$graphics.DrawRectangle($panelBorder, $panelRect)
$panelBorder.Dispose()

$boltPoints = @(
    (New-Object Drawing.PointF -ArgumentList 230,120),
    (New-Object Drawing.PointF -ArgumentList 170,270),
    (New-Object Drawing.PointF -ArgumentList 246,270),
    (New-Object Drawing.PointF -ArgumentList 210,370),
    (New-Object Drawing.PointF -ArgumentList 340,200),
    (New-Object Drawing.PointF -ArgumentList 276,200),
    (New-Object Drawing.PointF -ArgumentList 320,120)
)
$boltRect = New-Object Drawing.Rectangle -ArgumentList 170,120,170,250
$boltBrush = New-Object Drawing.Drawing2D.LinearGradientBrush -ArgumentList $boltRect, ([Drawing.Color]::FromArgb(255,250,204,21)), ([Drawing.Color]::FromArgb(255,255,140,45)), 85
$graphics.FillPolygon($boltBrush, $boltPoints)
$boltBrush.Dispose()

$boltPen = New-Object Drawing.Pen ([Drawing.Color]::FromArgb(160,0,0,0)), 5
$graphics.DrawPolygon($boltPen, $boltPoints)
$boltPen.Dispose()

$arrowPoints = @(
    (New-Object Drawing.PointF -ArgumentList 210,340),
    (New-Object Drawing.PointF -ArgumentList 352,240),
    (New-Object Drawing.PointF -ArgumentList 388,265),
    (New-Object Drawing.PointF -ArgumentList 410,210),
    (New-Object Drawing.PointF -ArgumentList 452,325),
    (New-Object Drawing.PointF -ArgumentList 392,300),
    (New-Object Drawing.PointF -ArgumentList 360,360)
)
$arrowRect = New-Object Drawing.Rectangle -ArgumentList 300,220,160,160
$arrowBrush = New-Object Drawing.Drawing2D.LinearGradientBrush -ArgumentList $arrowRect, ([Drawing.Color]::FromArgb(255,244,63,94)), ([Drawing.Color]::FromArgb(255,56,189,248)), 5
$graphics.FillPolygon($arrowBrush, $arrowPoints)
$arrowBrush.Dispose()

$arrowPen = New-Object Drawing.Pen ([Drawing.Color]::FromArgb(120,0,0,0)), 4
$graphics.DrawPolygon($arrowPen, $arrowPoints)
$arrowPen.Dispose()

$format = New-Object Drawing.StringFormat
$format.Alignment = [Drawing.StringAlignment]::Center
$format.LineAlignment = [Drawing.StringAlignment]::Near

$titleFont = New-Object Drawing.Font('Segoe UI Semibold', 66, [Drawing.FontStyle]::Bold)
$subtitleFont = New-Object Drawing.Font('Segoe UI', 40, [Drawing.FontStyle]::Bold)

$titleBrush = New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(245,245,245))
$subtitleBrush = New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(190,224,254))

$graphics.DrawString('SPEED', $titleFont, $titleBrush, ($width / 2), 392, $format)
$graphics.DrawString('CRM', $subtitleFont, $subtitleBrush, ($width / 2), 462, $format)

$titleFont.Dispose()
$subtitleFont.Dispose()
$titleBrush.Dispose()
$subtitleBrush.Dispose()

$graphics.Dispose()
$bitmap.Save($path, [Drawing.Imaging.ImageFormat]::Jpeg)
$bitmap.Dispose()

Write-Host "Logo guardado en $path"