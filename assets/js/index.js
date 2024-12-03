'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (canvas) {
  var Board = function () {
    function Board(canvas, scale, colors) {
      _classCallCheck(this, Board);

      this.bg = hsla.apply(undefined, colors.bg);
      this.cells = [];
      this.colors = colors;
      this.ctx = canvas.getContext('2d');
      this.scale = scale;
      this.dragging = false;
      this.handlers = {
        handleMouseDown: this.handleMouseDown.bind(this),
        handleMouseMove: this.handleMouseMove.bind(this),
        handleMouseUp: this.handleMouseUp.bind(this)
      };
      this.loopDelay = 500; // Add a delay for the loop (in milliseconds)
    }

    Board.prototype.init = function init() {
      var bg = this.colors.bg.slice(0);
      bg[3] = 1;

      this.setupCanvas();
      this.setupBoard();
      this.setupCells();
      this.setupListeners();

      this.ctx.fillStyle = hsla.apply(undefined, bg);
      this.ctx.fillRect(0, 0, this.w, this.h);
    };

    Board.prototype.draw = function draw() {
      var max = this.cells.length;

      this.ctx.fillStyle = this.bg;
      this.ctx.fillRect(0, 0, this.w, this.h);

      for (var i = 0; i < max; i++) {
        this.cells[i].draw();
      }
    };

    Board.prototype.setupCanvas = function setupCanvas() {
      this.ctx.canvas.width = this.ctx.canvas.clientWidth;
      this.ctx.canvas.height = this.ctx.canvas.clientHeight;
      this.w = this.ctx.canvas.width + this.scale;
      this.h = this.ctx.canvas.height + this.scale;

      this.ctx.fillStyle = this.bgColor;
      this.ctx.fillRect(0, 0, this.w, this.h);
    };

    Board.prototype.setupBoard = function setupBoard() {
      this.cellsLength = Math.floor(this.w / this.scale * (this.h / this.scale));
      this.columns = Math.floor(this.w / this.scale);
      this.rows = Math.floor(this.h / this.scale);
    };

    Board.prototype.setupCells = function setupCells() {
      var len = this.cellsLength;

      for (var i = 0; i < len; i++) {
        this.cells.push(new Cell(this, i));
      }

      for (var i = 0; i < len; i++) {
        this.cells[i].setColors();
      }
    };

    Board.prototype.setupListeners = function setupListeners() {
      this.ctx.canvas.addEventListener('mousedown', this.handlers.handleMouseDown);
      this.ctx.canvas.addEventListener('mouseup', this.handlers.handleMouseUp);
      this.ctx.canvas.addEventListener('mousemove', this.handlers.handleMouseMove);
    };

    Board.prototype.drawAtCoords = function drawAtCoords(clientX, clientY) {
      var _this = this;

      var x = Math.floor(clientX / this.scale);
      var y = Math.floor(clientY / this.scale);
      var i = y * this.columns + x;
      var cell = this.cells[i];
      var neighbors = cell.neighbors;

      cell.alive = true;

      neighbors.forEach(function (neighbor) {
        _this.cells[neighbor].alive = true;
      });
    };

    Board.prototype.handleMouseDown = function handleMouseDown(e) {
      this.dragging = true;
      this.drawAtCoords(e.clientX, e.clientY);
    };

    Board.prototype.handleMouseUp = function handleMouseUp() {
      this.dragging = false;
    };

    Board.prototype.handleMouseMove = function handleMouseMove(e) {
      var _this2 = this;

      if (!this.dragging) {
        return;
      }

      window.requestAnimationFrame(function () {
        _this2.drawAtCoords(e.clientX, e.clientY);
      });
    };

    Board.prototype.destroy = function destroy() {
      window.cancelAnimationFrame(this.handlers.raf);
      this.ctx.canvas.removeEventListener('mousedown', this.handlers.handleMouseDown);
      this.ctx.canvas.removeEventListener('mouseup', this.handlers.handleMouseUp);
      this.ctx.canvas.removeEventListener('mousemove', this.handlers.handleMouseMove);
      this.cells = [];
      this.dragging = false;
      this.handlers = {
        handleMouseDown: this.handleMouseDown.bind(this),
        handleMouseMove: this.handleMouseMove.bind(this),
        handleMouseUp: this.handleMouseUp.bind(this)
      };
    };

    Board.prototype.update = function update() {
      var max = this.cells.length;

      for (var i = 0; i < max; i++) {
        this.cells[i].updatePrevious();
      }

      for (var i = 0; i < max; i++) {
        this.cells[i].update();
      }
    };

    Board.prototype.step = function step() {
      this.update();
      this.draw();
    };

    Board.prototype.loop = function loop() {
      var _this3 = this;

      this.step();
      setTimeout(function () {
        _this3.handlers.raf = window.requestAnimationFrame(_this3.loop.bind(_this3));
      }, this.loopDelay); // Add delay to the loop
    };

    Board.prototype.start = function start() {
      this.handlers.raf = this.loop();
    };

    Board.prototype.createRandomAliveCell = function () {
      var randomIndex = Math.floor(Math.random() * this.cells.length);
      this.cells[randomIndex].alive = true;
    };

    return Board;
  }();

  var Cell = function () {
    function Cell(board, i) {
      _classCallCheck(this, Cell);

      this.alive = Math.random() < 0.1;
      this.board = board;
      this.i = i;
      this.x = Math.floor(i % board.columns) * board.scale;
      this.y = Math.floor(i / board.columns) * board.scale;
      this.col = Math.floor(this.x / board.scale);
      this.row = Math.floor(this.y / board.scale);
      this.previous = this.alive;
      this.neighbors = this.getNeighbors();
    }

    Cell.prototype.draw = function draw() {
      if (this.alive) {
        this.board.ctx.fillStyle = this.color;
        this.board.ctx.fillRect(this.x, this.y, this.board.scale, this.board.scale);
      }
    };

    Cell.prototype.getNeighbors = function getNeighbors() {
      var col = this.col;
      var cols = this.board.columns;
      var i = this.i;
      var neighbors = [];
      var rows = this.board.rows;
      var row = this.row;

      var n = i - cols;
      var e = i + 1;
      var s = i + cols;
      var w = i - 1;

      var nw = n - 1;
      var ne = n + 1;
      var sw = s - 1;
      var se = s + 1;

      if (col !== 0) {
        neighbors.push(w);
      }

      if (row !== 0 && col !== 0) {
        neighbors.push(nw);
      }

      if (row !== 0) {
        neighbors.push(n);
      }

      if (row !== 0 && col !== cols - 1) {
        neighbors.push(ne);
      }

      if (col !== cols - 1) {
        neighbors.push(e);
      }

      if (col !== cols - 1 && row !== rows) {
        neighbors.push(se);
      }

      if (row !== rows) {
        neighbors.push(s);
      }

      if (row !== rows && col !== 0) {
        neighbors.push(sw);
      }

      return neighbors;
    };

    Cell.prototype.getLivingNeighbors = function getLivingNeighbors() {
      var cells = this.board.cells;
      var livingNeighbors = [];
      var neighbors = this.neighbors;

      for (var i = 0, max = neighbors.length; i < max; i++) {
        var cell = cells[neighbors[i]];

        if (cell && cell.previous) {
          livingNeighbors.push(neighbors[i]);
        }
      }

      return livingNeighbors;
    };

    Cell.prototype.updatePrevious = function updatePrevious() {
      this.previous = this.alive;
    };

    Cell.prototype.update = function update() {
      var livingNeighbors = this.getLivingNeighbors().length;

      if (this.previous) {
        if (livingNeighbors === 2 || livingNeighbors === 3) {
          this.alive = true;
        }

        if (livingNeighbors < 2 || livingNeighbors > 3) {
          this.alive = false;
        }
      } else {
        if (livingNeighbors === 3) {
          this.alive = true;
        }
      }
    };

    Cell.prototype.setColors = function setColors() {
      var fg = this.board.colors.alive.slice(0);
      var bg = this.board.colors.bg;

      this.color = hsla.apply(undefined, [0, 0, Math.floor(map(this.i, 0, this.board.cells.length, 0, 100)), fg[3]]);
      this.bg = hsla.apply(undefined, bg);
    };

    return Cell;
  }();

  var board = new Board(canvas, 5, { bg: [0, 0, 50, 0.015], alive: [0, 0, 100, 0.8] });
  board.init();
  board.start();

  setInterval(function() {
    board.createRandomAliveCell();
  }, 100); // Increase the interval time to slow down the creation of random alive cells

  var reset = debounce(function (e) {
    board.destroy();
    board.init();
    board.start();
  }, 250);

  window.addEventListener('resize', reset);

  function hsla(h, s, l, a) {
    return 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + a + ')';
  }

  function map(value, in1, in2, out1, out2) {
    return (value - in1) * (out2 - out1) / (in2 - in1) + out1;
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
})(document.getElementById('gol'));
