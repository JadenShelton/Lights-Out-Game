<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lights Out — PA_JS</title>
    <link rel="stylesheet" href="lightsout.css">
</head>
<body>

    <!-- Step 1: Page Header -->
    <div id="step-indicator">Step X</div>

    <h1>Your Name Here</h1>

    <div id="game-wrapper">

        <h2>Lights Out</h2>
        <p class="subtitle">Click any cell to toggle it and its neighbors. Use the color strip to pick your color.</p>

        <!-- Step 2: Color Strip Table -->
        <div id="strip-wrapper">
            <table id="color-strip">
                <tr>
                    <td id="strip-0" class="strip-cell" data-color="black"></td>
                    <td id="strip-1" class="strip-cell" data-color="red"></td>
                    <td id="strip-2" class="strip-cell" data-color="blue"></td>
                    <td id="strip-3" class="strip-cell" data-color="yellow"></td>
                    <td id="strip-4" class="strip-cell" data-color="green"></td>
                    <td id="strip-5" class="strip-cell" data-color="purple"></td>
                    <td id="strip-6" class="strip-cell" data-color="orange"></td>
                    <td id="strip-7" class="strip-cell" data-color="cyan"></td>
                    <td id="strip-8" class="strip-cell" data-color="magenta"></td>
                    <td id="strip-9" class="strip-cell" data-color="gray"></td>
                </tr>
            </table>
        </div>

        <!-- Step 3: Main Game Table -->
        <div id="grid-wrapper">
            <table id="game-grid"></table>
        </div>

    </div>

    <!-- jQuery -->
    <script nonce="pa_js_2026" src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    <!-- Game logic -->
    <script nonce="pa_js_2026" src="lightsout.js"></script>

    <!-- jQuery interactions -->
    <script nonce="pa_js_2026" src="app.js"></script>

</body>
</html>
