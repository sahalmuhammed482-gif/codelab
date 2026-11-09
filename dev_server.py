"""
CodeLab: Materials × Bio
dev_server.py - Python Local Development Server

Run this file in your terminal using:
    python dev_server.py

This starts a local web server on port 8000 using Python's built-in standard library.
No third-party packages or pip installs required!
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CodeLabHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable caching-control for smooth local development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), CodeLabHTTPHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 60)
        print(" CodeLab: Materials × Bio - Python Web Server")
        print("=" * 60)
        print(f" Server active at: {url}")
        print(" Open the link above in your web browser to play!")
        print(" Press Ctrl + C to stop the server.")
        print("=" * 60)

        # Open default browser automatically
        try:
            webbrowser.open(url)
        except Exception:
            pass

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped gracefully.")
            sys.exit(0)

if __name__ == '__main__':
    run_server()
