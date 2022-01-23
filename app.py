from flask import Flask, render_template, request
from threading import Thread

app = Flask('')


@app.route('/')
def home():
    return render_template("home.html")


@app.route('/game')
def game():
    return render_template("game.html")


@app.route('/result')
def result():
    return render_template("result.html")


def run():
    app.run(host='0.0.0.0')


def show_site():
    t = Thread(target=run)
    t.start()


run()
