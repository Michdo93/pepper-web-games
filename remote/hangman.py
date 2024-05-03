# -*- coding: utf-8 -*-
import qi
import sys
import time
import signal

def handle_sigterm(signal, frame):
    # Programm beendet, wenn SIGTERM-Signal empfangen wird
    sys.exit(0)

def main(session):
    # Holen des ALTabletService
    tablet_service = session.service("ALTabletService")

    try:
        # Pfad zur HTML-Datei
        html_file_path = "https://michdo93.github.io/pepper-web-games/html/hangman.html"

        # Anzeigen der HTML-Seite
        tablet_service.showWebview(html_file_path)

        # Warten für eine Weile, damit der Benutzer die Seite sehen kann
        while True:
            time.sleep(1)

    except Exception as e:
        print("Fehler beim Anzeigen der HTML-Seite:", e)

    finally:
        # Verstecken der HTML-Seite, unabhängig davon, ob ein Fehler auftritt oder nicht
        tablet_service.hideWebview()

if __name__ == "__main__":
    # Signal SIGTERM abfangen
    signal.signal(signal.SIGTERM, handle_sigterm)

    ip = "127.0.0.1"
    port = 9559
    session = qi.Session()
    try:
        session.connect("tcp://" + ip + ":" + str(port))
    except RuntimeError:
        print ("Kann keine Verbindung zu Naoqi unter IP \"" + ip + "\" und Port " + str(port) + " herstellen.\n"
               "Bitte überprüfen Sie Ihre Skriptargumente. Führen Sie das Skript mit der Option -h aus, um Hilfe zu erhalten.")
        sys.exit(1)
    main(session)
