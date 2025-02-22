/**
 * @fileoverview All level data, where the vast majority is a clone of
 *     https://github.com/ruilov/CargoBot/blob/master/Levels.lua.
 *
 * @author elynnlee@cs.utexas.edu (Elynn Lee)
 *
 */

goog.provide('cn.LevelData');
goog.provide('cn.LevelData.levelpacks');
goog.provide('cn.LevelData.levels');

goog.require('cn.model.CargoColor');
goog.require('goog.array');



/**
 * @param {number} botPosition The initial bot position.
 * @param {!Array.<number>} stars A three-element array representing the minimum
 *     number of registers required to attain one, two, and three stars.
 * @param {!Array.<number>} functions The lengths of each available function.
 * @param {!Array.<string>} toolbox The available commands and conditionals.
 * @param {!Array.<!Array.<string>>} initial The initial cargo configuration.
 * @param {!Array.<!Array.<string>>} goal The final cargo configuration.
 * @param {string} hint A tip about the current level.
 * @constructor
 */
cn.LevelData = function(
    botPosition, stars, functions, toolbox, initial, goal, hint) {
  /** @type {number} */
  this.botPosition = botPosition - 1;

  /** @type {!Array.<number>} */
  this.stars = stars;

  /** @type {!Array.<number>} */
  this.functions = functions;

  /** @type {!Array.<string>} */
  this.toolbox = toolbox;

  /** @type {!Array.<!Array.<!cn.model.CargoColor>>} */
  this.initial = cn.LevelData.mapStacks_(initial);

  /** @type {!Array.<!Array.<!cn.model.CargoColor>>} */
  this.goal = cn.LevelData.mapStacks_(goal);

  /** @type {string} */
  this.hint = hint;
};


/**
 * @param {!Array.<!Array.<string>>} colors Stacks of colors (as implemented
 *     from the aforementioned source).
 * @return {!Array.<!Array.<!cn.model.CargoColor>>} The stack of colors as
 *     implemented in this rendition of Cargo-Bot.
 * @private
 */
cn.LevelData.mapStacks_ = function(colors) {
  return goog.array.map(
      colors,
      function(stack) {
        return goog.array.map(
            stack,
            function(color) {
              switch (color) {
                case 'red': return cn.model.CargoColor.RED;
                case 'green': return cn.model.CargoColor.GREEN;
                case 'blue': return cn.model.CargoColor.BLUE;
                case 'yellow': return cn.model.CargoColor.YELLOW;
                default: throw Error('no cargo implementation for: ' + color);
              }
            });
      });
};


/**
 * @type {Object.<string, !Array.<string>>}
 * @const
 */
cn.LevelData.levelpacks = {
  'Tutorial 1': [
    'Cargo 101',
    'Transporter',
      'Stack',
      'Swap',
      'Re-Curses',
      'Split'
  ],
  'Tutorial 2': [
    'Inverter',
    'From Beneath',
      'La Trieuse',
      'Translation',
      'Color Translate',
    'Go Left'
  ],
  'Easy': [
    'Double Flip',
    'Go Left 2',
    'Shuffle Sort',
    'Go the Distance',
    'Color Sort',
    'Walking Piles'
  ],
  'Medium': [
    'Repeat Inverter',
    'Double Sort',
    'Mirror',
    'Lay it out',
    'The Stacker',
    'Clarity'
  ],
  'Hard': [
    'Come Together',
    'Come Together 2',
    'Up The Greens',
    'Fill The Blanks',
    'Count The Blues',
    'Multi Sort'
  ],
  'Crazy': [
    'Divide by two',
    'The Merger',
    'Even the Odds',
    'Genetic Code',
    'Multi Sort 2',
    'The Swap'
  ],
  'Impossible': [
    'Restoring Order',
    'Changing Places',
    'Palette Swap',
    'Mirror 2',
    'Changing Places 2',
    'Vertical Sort'
  ],
    'Champo': [
	'Bouton d\'arrêt',
	'Roumanie',
	'Permutation circulaire',
	'Chèvre deviendra barbichette',
	'Spain',
	'Ella',
	'Inversion',
	'Aure',
	'Demis',
	'Jean Baptiste'
  ]
};


/**
 * @type {Object.<string, !cn.LevelData>}
 * @const
 */
cn.LevelData.levels = {
/*** Pos initial, Etoiles, Registres, opérations, départ (de bas en haut), arrivée, hint ***/
/***
    'Toto': new cn.LevelData(
        2,
        [30, 30, 30],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
        'blue', 'green', 'yellow', 'none', 'any'],
        [[], [], []],
        [[], [], []],
'Niveau proposé par '
    ),
***/
    'Jean Baptiste': new cn.LevelData(
        1,
        [30, 30, 30],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
        'green', 'none', 'any'],
        [['green', 'red'], ['green', 'red'], ['green', 'red'], ['red', 'green'], ['red', 'green']],
        [['green', 'green', 'green', 'green', 'green'], [], [], [], ['red', 'red', 'red', 'red', 'red']],
'Niveau proposé par Jean-Baptiste'
    ),
    'Demis': new cn.LevelData(
        1,
        [15, 11, 11],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3',
        'blue', 'yellow', 'none', 'any'],
        [['blue'], ['blue'], ['yellow'], ['blue'], ['blue'], ['yellow']],
        [['yellow'], ['blue'], ['blue'], ['yellow'], ['blue'], ['blue']],
'Niveau proposé par Demis'
    ),
    'Aure': new cn.LevelData(
        1,
        [20, 16, 16],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3',
        'blue', 'green', 'none', 'any'],
        [['blue', 'green', 'green'], [], []],
        [['green', 'green', 'blue'], [], []],
'Niveau proposé par Aure'
    ),
    'Inversion': new cn.LevelData(
        3,
        [16, 16, 16],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3',
        'blue', 'yellow', 'none', 'any'],
        [[], [], ['yellow', 'blue', 'yellow', 'blue', 'yellow', 'blue'], [], []],
        [[], [], ['blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow'], [], []],
'Niveau proposé par Jérémy'
    ),
    'Ella': new cn.LevelData(
        2,
        [30, 30, 30],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3',
        'blue', 'green', 'none', 'any'],
        [[], ['green', 'blue'], []],
        [[], ['blue', 'green'], []],
'Niveau proposé par Ella'
    ),
    'Evasion': new cn.LevelData(
        2,
        [30, 30, 30],
        [10, 10, 10, 8, 8, 8],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5','red',
        'blue', 'green', 'yellow', 'none', 'any'],
        [['blue', 'red', 'blue'], ['yellow', 'green', 'yellow'], [], []],
        [['yellow', 'blue', 'yellow', 'blue'], [], ['green', 'red'], []],
'Niveau proposé par Laure, Axelle et Clotilde'
    ),
    'Trier par couleurs': new cn.LevelData(
        3,
        [40, 40, 40],
        [8, 8, 8, 8, 5, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'f4','f5','none', 'any'],
        [['yellow', 'green', 'red'], [], [], ['red', 'yellow', 'green'], ['blue']],
        [['blue'], ['red', 'red'], ['green', 'green'], [], ['yellow', 'yellow']],
'Niveau proposé par Margot et Clémence'
    ),
    'Rassemblement': new cn.LevelData(
        1,
        [40, 40, 40],
        [10, 10, 10, 10, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'f4', 'red',
        'blue', 'green', 'yellow', 'none', 'any'],
        [['yellow'], ['green'], ['blue', 'red']],
        [[], ['blue','yellow','green','red'], []],
'Niveau proposé par Tess'
    ),
    'May the odds be ever in your favour': new cn.LevelData(
        5,
        [50, 50, 50],
        [10,10,10,10,10],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'f4','red',
        'green', 'yellow', 'none', 'any'],
        [['green'], ['green', 'green', 'red'], [],
	 ['red', 'red', 'red'], ['green', 'red', 'green'], ['red', 'red', 'red'],
	 [], ['green', 'green', 'yellow'], ['green']],
        [['green', 'green', 'green'], ['green'], [],
	 ['red', 'red', 'red'], ['red', 'yellow', 'red'], ['red', 'red', 'red'],
	 [], ['green', 'green', 'green'], ['green']],
'Niveau proposé par L&R'
    ),
    'Spain': new cn.LevelData(
        3,
        [30, 30, 30],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
        'yellow'],
        [['red', 'yellow'], ['red'], [], ['red'], ['yellow']],
        [['red'], ['yellow'], ['red'], ['yellow'], ['red']],
'Niveau proposé par Thomas et Martin'
    ),
    'Chèvre deviendra barbichette': new cn.LevelData(
        1,
        [30, 30, 30],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3',
        'green', 'yellow', 'none', 'any'],
        [['yellow', 'yellow', 'yellow'], ['yellow', 'green', 'yellow'], [], [], []],
        [[], [], ['green'], ['yellow', 'yellow'], ['yellow', 'yellow', 'yellow']],
'Niveau proposé par Nathalie, Lise et Mathilde'
    ),
    'Permutation circulaire': new cn.LevelData(
        1,
        [28, 13, 13],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
         'blue', 'green', 'none', 'any'],
        [['green'], ['blue'], ['red']],
        [['blue'], ['red'], ['green']],
'Niveau proposé par Robin'
    ),
    'Roumanie': new cn.LevelData(
        4,
        [30, 30, 30],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'none'],
        [['blue', 'blue'], ['yellow', 'yellow'], ['red', 'red'], [], []],
        [[], [], ['blue', 'blue'], ['yellow', 'yellow'], ['red', 'red']],
'Niveau proposé par Philémon'
    ),
    'Bouton d\'arrêt': new cn.LevelData(
        1,
        [30, 30, 30],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
        'green', 'none', 'any'],
        [[], ['green'], ['green'], ['green'], ['red']],
        [['green', 'green', 'green'], [], [], [], ['red']],
'Niveau proposé par Lucien'
    ),
    'Stack': new cn.LevelData(
        2,
        [8, 8, 7],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
        [['blue'], [], ['red']],
        [[], ['blue','red'], []],
'Détaillez la suite d\'instructions à effectuer.\n\nVous pouvez "revenir à la ligne" en appelant un autre programme'
    ),
    'Swap': new cn.LevelData(
        2,
        [20, 15, 10],
        [8, 8, 8, 5],
        ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
        [[], ['blue','red'], []],
        [[], ['red','blue'], []],
        'Réutilisez les idées du niveau précédent...'
    ),
    'La Trieuse': new cn.LevelData(
	1,
	[20,14,12],
	[8,8,8,5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
        'green', 'yellow', 'none', 'any'],
	[['yellow','green','red','yellow','red'], [], [], []],
	[[], ['yellow','yellow'], ['green'], ['red','red']],
	'Cherchez une solution générale plutôt qu\'une solution particulière' + '\n\nLa plus courte solution connue utilise 12 registres.'
    ),
  'Split': new cn.LevelData(
      2,
      [15, 10, 9],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
      [[], ['yellow', 'yellow', 'yellow', 'yellow'], []],
      [['yellow', 'yellow'], [], ['yellow', 'yellow']],
      'Alternez gauche et droite, et utilisez les programmes pour raccourcir votre ' +
          'solution.\n\nLa plus courte utilise 9 registres.'
  ),
    'Translation': new cn.LevelData(
        1,
        [10,6,4],
        [8,8,8,5],
        ['right','pickup','left','f0','f1','f2','f3','red','none'], [[],['red','red','red'],[],['red','red','red','red','red'],[],['red','red'],['red','red','red','red'],[]],        [['red','red','red'],[],['red','red','red','red','red'],[],['red','red'],['red','red','red','red'],[],[]],
        'Utilisez les étiquettes pour savoir si vous avez fini de déplacer une pile, puis passez à la suivante.'
    ),
    'Color Translate': new cn.LevelData(
        1,
        [9,5,4],
        [8,8,8,5],        ['right','pickup','left','f0','f1','f2','f3','blue','green','none','any'], [['green'],['blue','blue'],['green'],[],['blue','blue','blue'],['green'],['blue','blue'],['blue','blue']], [['green','blue','blue'],[],['green'],['blue','blue','blue'],[],['green','blue','blue'],['blue','blue'],[]],
        'Très similaire au précédent, mais il faut tenir compte des couleurs.'
    ),
  'Cargo 101': new cn.LevelData(
      1,
      [3, 3, 3],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
      [['yellow'], []],
      [[], ['yellow']],
      'Bas, Droite, Bas'
  ),
  'Transporter': new cn.LevelData(
      1,
      [5, 5, 4],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
      [['yellow'], [], [], []],
      [[], [], [], ['yellow']],
      'Réutilisez et adaptez la solution du premier niveau.\n\nLa plus courte solution utilise 4 registres.'
  ),
  'Re-Curses': new cn.LevelData(
      1,
      [10, 5, 5],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
      [['yellow', 'yellow', 'yellow', 'yellow'], []],
      [[],
        ['yellow', 'yellow', 'yellow', 'yellow']],
      'Déplacez une caisse vers la droite, revenez, et recommencez.\n\nLa plus courte solution utilise 5 registres.'
  ),
  'Inverter': new cn.LevelData(
      1,
      [15, 10, 10],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
      [['blue', 'red', 'green', 'yellow'], [], [], [], [], []],
      [[], [], [], [], [], ['yellow', 'green', 'red', 'blue']],
      'Déplacez les quatre blocs vers la droite et recommencez.\n\nLa ' +
          'plus courte solution utilise 10 registres.'
  ),
  'From Beneath': new cn.LevelData(
      1,
      [8, 6, 5],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'yellow',
        'none', 'any'],
      [['yellow', 'blue', 'blue', 'blue', 'blue'], [], []],
      [[], ['blue', 'blue', 'blue', 'blue'], ['yellow']],
      'À droite une fois pour les bleus, deux fois pour le jaune : utilisez les étiquettes !' + '\nUne instruction ne s\'exécutera que si la pince contient un bloc de la couleur indiquée par l\'étiquette.' + '\n\nLa plus courte solution utilise 5 registres.'
  ),
  'Go Left': new cn.LevelData(
      1,
      [15, 9, 9],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
      [[], ['red', 'red', 'red'], ['green', 'green', 'green'],
        ['blue', 'blue', 'blue']],
      [['red', 'red', 'red'], ['green', 'green', 'green'],
        ['blue', 'blue', 'blue'], []],
      'Déplacez chaque pile vers la gauche et recommencez.\n\nLa plus courte solution utilise 9 ' +
          'registres.'
  ),
  'Double Flip': new cn.LevelData(
      1,
      [12, 6, 5],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red',
        'green', 'yellow', 'none', 'any'],
      [['blue', 'red', 'green', 'yellow'], [], []],
      [[], [], ['blue', 'red', 'green', 'yellow']],
      'Go right once if holding any, twice if holding blue, and left if ' +
          'holding none. Repeat.\n\nThe shortest solution uses 5 registers.'
  ),
  'Go Left 2': new cn.LevelData(
      1,
      [8, 6, 4],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red',
        'green', 'none', 'any'],
      [[], ['red', 'red', 'red'], ['blue', 'blue', 'blue'],
        ['green', 'green', 'green']],
      [['red', 'red', 'red'], ['blue', 'blue', 'blue'],
        ['green', 'green', 'green'], []],
      'Go right if holding none, and left if holding any. Repeat.\n\nThe ' +
          'shortest solution uses 4 registers.'
  ),
  'Shuffle Sort': new cn.LevelData(
      2,
      [15, 10, 9],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3'],
      [[], ['blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow'], []],
      [['blue', 'blue', 'blue'], [], ['yellow', 'yellow', 'yellow']],
      'Alternate left and right, and make sure to use F2 to shorten your ' +
          'solution.\n\nThe shortest solution uses 9 registers.'
  ),
  'Go the Distance': new cn.LevelData(
      1,
      [12, 6, 4],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'yellow',
        'none', 'any'],
      [['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'],
        [], ['red', 'red', 'red', 'red']],
      [['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'],
        ['red', 'red', 'red', 'red'], []],
      'Go right if holding none, and left if holding red. Repeat.\n\nThe ' +
          'shortest solution uses 4 registers.'
  ),
  'Color Sort': new cn.LevelData(
      2,
      [14, 10, 8],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'green',
        'none', 'any'],
      [[], ['green', 'green', 'red', 'green', 'red', 'red'], []],
      [['red', 'red', 'red'], [], ['green', 'green', 'green']],
      'Go over each of the 3 piles and drop or pick up based on the color. ' +
          'When over the left pile drop if red, when over the right pile ' +
          'drop if green.\n\nThe shortest known solution uses 8 registers, ' +
          'all in F1.'
  ),
  'Walking Piles': new cn.LevelData(
      1,
      [13, 11, 9],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'none'],
      [['blue', 'blue', 'blue', 'blue'], ['blue', 'blue', 'blue', 'blue'],
        ['blue', 'blue', 'blue', 'blue'], [], [], [], []],
      [[], [], [], [], ['blue', 'blue', 'blue', 'blue'],
        ['blue', 'blue', 'blue', 'blue'], ['blue', 'blue', 'blue', 'blue']],
      'For a 3 star solution, move each pile 3 slots to the right, and then ' +
          'repeat. This method can be implemented with 10 registers.\n\nThe ' +
          'shortest known solution uses 9 registers (with an approach that ' +
          'is very specific to this configuration)'
  ),
  'Repeat Inverter': new cn.LevelData(
      1,
      [9, 7, 5],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red',
        'green', 'yellow', 'none', 'any'],
      [['yellow', 'red', 'green', 'blue'], [],
        ['yellow', 'red', 'green', 'blue'], [],
        ['yellow', 'red', 'green', 'blue'], []],
      [[], ['blue', 'green', 'red', 'yellow'], [],
        ['blue', 'green', 'red', 'yellow'], [],
        ['blue', 'green', 'red', 'yellow']],
      'It can be done with the usual 5 instructions and clever usage of ' +
          'conditional modifiers. Solutions with up to 7 instructions earn 3 ' +
          'stars.'
  ),
  'Double Sort': new cn.LevelData(
      2,
      [20, 14, 11],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'yellow',
        'none', 'any'],
      [[], ['blue', 'blue', 'yellow', 'yellow'],
        ['yellow', 'blue', 'yellow', 'blue'], []],
      [['blue', 'blue', 'blue', 'blue'], [], [],
        ['yellow', 'yellow', 'yellow', 'yellow']],
      'Sort, go right, sort, go left. Repeat. Use at most 14 instructions ' +
          'for 3 stars.\n\nThe shortest known solution uses 11 registers.'
  ),
  'Mirror': new cn.LevelData(
      1,
      [9, 7, 6],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'green', 'yellow',
        'none', 'any'],
      [['yellow', 'yellow', 'yellow', 'yellow'], ['green', 'green'], ['green'],
        ['green'], ['green', 'green'], []],
      [[], ['green', 'green'], ['green'], ['green'], ['green', 'green'],
        ['yellow', 'yellow', 'yellow', 'yellow']],
      'Use at most 7 registers for 3 stars. There are various known ' +
          'solutions with 6 registers in F1, but no known solution with only 5.'
  ),
  'Lay it out': new cn.LevelData(
      1,
      [13, 9, 7],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'green', 'none'],
      [['green', 'green', 'green', 'green', 'green', 'green'], [], [], [], [],
        []],
      [['green'], ['green'], ['green'], ['green'], ['green'], ['green']],
      'Move the pile one slot to the right and bring one crate back to the ' +
          'left.\n\nThe shortest known solution uses 7 registers.'
  ),
  'The Stacker': new cn.LevelData(
      5,
      [12, 10, 8],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'yellow', 'none'],
      [[], ['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'],
        ['yellow'], []],
      [[], [], [], [], [], [], [],
        ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow']],
      'Go left until you find an empty slot, and then move the last ' +
          'yellow crate one slot to the right. Repeat.\n\nThe shortest known ' +
          'solution uses 8 registers.'
  ),
  'Clarity': new cn.LevelData(
      1,
      [9, 7, 6],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'green',
        'none', 'any'],
      [['green', 'red', 'green'], ['green', 'green', 'green', 'red', 'green'],
        ['red', 'green', 'red', 'green'], ['red', 'green', 'green'], []],
      [['green', 'red'], ['green', 'green', 'green', 'red'],
        ['red', 'green', 'red'], ['red'],
        ['green', 'green', 'green', 'green', 'green']],
      'A disguised version of Mirror'
  ),
  'Come Together': new cn.LevelData(
      1,
      [15, 9, 7],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'yellow', 'none'],
      [[], [], ['yellow', 'yellow', 'yellow'], ['yellow'], [], [],
        ['yellow', 'yellow']],
      [['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'], [], [], [],
        [], [], []],
      'You can go right and find a yellow crate, but when bringing it back ' +
          'how do you know when to stop so that you don\'t crash into the ?' +
          'wall\n\nIn F2 use the programming stack to count the number of ' +
          'times you have to go right until you find a yellow crate, then go ' +
          'back left that same number of times. Another way to look at it: ' +
          'F2 is a recursive function that goes right until it finds a ' +
          'crate, and then it goes back to the original position. It can be ' +
          'implemented with 4 registers.\n\nThe shortest known solution uses ' +
          'a total of 7 registers.'
  ),
  'Come Together 2': new cn.LevelData(
      1,
      [12, 10, 8],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'green', 'yellow',
        'none', 'any'],
      [[], ['yellow'], ['yellow', 'green', 'green'], ['yellow'],
        ['yellow', 'green'], ['yellow'], ['green', 'green', 'green', 'green']],
      [['green', 'green', 'green', 'green', 'green', 'green', 'green'],
        ['yellow'], ['yellow'], ['yellow'], ['yellow'], ['yellow'], []],
      'Another stack puzzle. Re-use the solution from the previous level ' +
          'with a small modification.\n\nThe shortest known solution uses 8 ' +
          'registers.'
  ),
  'Up The Greens': new cn.LevelData(
      1,
      [12, 9, 7],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'green',
        'none', 'any'],
      [['green'], ['blue', 'blue'], ['green'], [], ['blue', 'blue', 'blue'],
        ['green'], ['blue', 'blue'], ['blue', 'blue']],
      [['green', 'blue', 'blue'], [], ['green', 'blue', 'blue', 'blue'], [], [],
        ['green', 'blue', 'blue', 'blue', 'blue'], [], []],
      'Very similar to the previous two levels but let the stack unwind and ' +
          'reset when you find a green. To do this only go left if holding ' +
          'a blue.\n\nThe shortest known solution uses 7 registers.'
  ),
  'Fill The Blanks': new cn.LevelData(
      1,
      [20, 14, 11],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'green',
        'none', 'any'],
      [['green', 'green', 'green', 'green'], ['red'], [], ['red'], [], [],
        ['red'], []],
      [[], ['red'], ['green'], ['red'], ['green'], ['green'], ['red'],
        ['green']],
      'As in the \"Lay It Out\" level, move the entire pile one slot to the ' +
          'right and bring one crate back to the left, except in the first ' +
          'iteration.\n\nThe shortest known solution uses 11 registers.'
  ),
  'Count The Blues': new cn.LevelData(
      1,
      [15, 12, 9],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'yellow',
        'none', 'any'],
      [['yellow', 'blue', 'blue'], [], [], [], ['yellow', 'blue'], [], []],
      [[], ['blue', 'blue'], [], ['yellow'], [], ['blue'], ['yellow']],
      'Another stack puzzle. The number of blues indicates how many times ' +
          'to go right with the yellow.\n\nThe shortest known solution uses ' +
          '9 registers.'
  ),
  'Multi Sort': new cn.LevelData(
      1,
      [16, 11, 11],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'yellow',
        'none', 'any'],
      [[], ['blue', 'yellow'], [], ['yellow', 'yellow', 'blue'],
        ['yellow', 'blue', 'yellow', 'blue'], ['blue', 'yellow'], ['blue'], []],
      [['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'], [], [], [],
        [], [], [], ['blue', 'blue', 'blue', 'blue', 'blue', 'blue']],
      'Come Together for yellows, The Stacker for blues. Go forward until ' +
          'you find a crate. If blue, move it one slot further and come all ' +
          'the way back (using the stack) empty handed. If yellow, bring ' +
          'it back and drop it. Repeat.\n\nThe shortest known solution uses ' +
          '11 registers.'
  ),
  'Divide by two': new cn.LevelData(
      1,
      [20, 14, 12],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'none'],
      [['blue', 'blue', 'blue', 'blue'], [], ['blue', 'blue'], [],
        ['blue', 'blue', 'blue', 'blue', 'blue', 'blue'], [],
        ['blue', 'blue', 'blue', 'blue'], []],
      [['blue', 'blue'], ['blue', 'blue'], ['blue'], ['blue'],
        ['blue', 'blue', 'blue'], ['blue', 'blue', 'blue'], ['blue', 'blue'],
        ['blue', 'blue']],
      'Wind up the stack for every two crates. Move one crate back each time ' +
          'it unwinds.\n\nThe shortest known solution uses 12 registers.'
  ),
  'The Merger': new cn.LevelData(
      1,
      [9, 7, 6],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red', 'none',
        'any'],
      [['blue', 'blue', 'blue'], [], ['red', 'red', 'red']],
      [[], ['blue', 'red', 'blue', 'red', 'blue', 'red'], []],
      'Use the stack once in each blue, and unwind it in each red.\n\nThe ' +
          'shortest known solution uses 6 registers.'
  ),
  'Even the Odds': new cn.LevelData(
      1,
      [13, 11, 10],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red',
        'green', 'yellow', 'none', 'any'],
      [['green', 'green', 'green', 'green', 'green'], [], ['red', 'red'], [],
        ['blue', 'blue', 'blue'], [], ['yellow', 'yellow', 'yellow', 'yellow'],
        []],
      [['green'], ['green', 'green', 'green', 'green'], [], ['red', 'red'],
        ['blue'], ['blue', 'blue'], [],
        ['yellow', 'yellow', 'yellow', 'yellow']],
      'If the pile has an odd number of crates, leave one crate behind, ' +
          'otherwise move all of them. Use a sequence of moves that undoes ' +
          'itself when repeated to move the crates right, and make sure to ' +
          'execute it an even number of times.\n\nThe shortest known ' +
          'solution uses 10 registers.'
  ),
  'Genetic Code': new cn.LevelData(
      1,
      [29, 20, 17],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'green', 'yellow',
        'none', 'any'],
      [['green', 'yellow', 'yellow', 'green', 'yellow', 'green'], [],
        ['yellow', 'yellow', 'yellow'], [], ['green', 'green', 'green']],
      [[], ['green', 'yellow', 'green', 'yellow', 'yellow', 'green'], [],
        ['green', 'yellow', 'yellow', 'green', 'yellow', 'green'], []],
      'The left pile gives instructions for how to construct the right pile. ' +
          'Wind up the entire stack on the left and unwind on the right.\n\n' +
          'The shortest known solution uses 17 registers.'
  ),
  'Multi Sort 2': new cn.LevelData(
      1,
      [25, 17, 17],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red',
        'green', 'yellow', 'none', 'any'],
      [[], ['blue', 'yellow', 'red', 'green', 'yellow'], [],
        ['red', 'blue', 'blue', 'green', 'green', 'yellow'], [],
        ['red', 'green', 'yellow', 'red', 'blue'], []],
      [['blue', 'blue', 'blue', 'blue'], [], ['red', 'red', 'red', 'red'], [],
        ['green', 'green', 'green', 'green'], [],
        ['yellow', 'yellow', 'yellow', 'yellow']],
      'Go over each pile and either pick up conditional on none if over ' +
          'the even slots, or drop conditional on the corresponding color if ' +
          'over the odd slots.\n\nThe shortest known solution uses 17 ' +
          'registers.'
  ),
  'The Swap': new cn.LevelData(
      2,
      [15, 12, 10],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'green',
        'none', 'any'],
      [['red', 'red', 'red'], [], ['green', 'green', 'green']],
      [['green', 'green', 'green'], [], ['red', 'red', 'red']],
      'Merge the piles in the middle, change parity, and unmerge.\n\nThe ' +
          'shortest known solution uses 10 registers.'
  ),
  'Restoring Order': new cn.LevelData(
      1,
      [29, 20, 16],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red', 'none',
        'any'],
      [[], ['blue', 'red', 'blue', 'blue'], ['red', 'blue', 'red', 'blue'],
        ['blue', 'blue', 'blue'], ['red'], ['red', 'blue'], ['blue'], []],
      [[], ['blue', 'blue', 'blue'], ['blue', 'blue'], ['blue', 'blue', 'blue'],
        [], ['blue'], ['blue'], ['red', 'red', 'red', 'red', 'red']],
      'For each pile move the reds one slot to the right and the blues ' +
          'one slot to the left, but make sure to wind up a stack for ' +
          'the blues so that you can put them back afterwards. Repeat for ' +
          'each pile.\n\nThe shortest known solution uses 16 registers.'
  ),
  'Changing Places': new cn.LevelData(
      1,
      [20, 18, 17],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'green',
        'none', 'any'],
      [['red'], ['red', 'red', 'red'], ['green', 'green', 'green'], [],
        ['red', 'red', 'red', 'red'], ['red', 'red'],
        ['green', 'green', 'green', 'green'], ['green']],
      [['red', 'red', 'red'], ['red'], [], ['green', 'green', 'green'],
        ['red', 'red'], ['red', 'red', 'red', 'red'], ['green'],
        ['green', 'green', 'green', 'green']],
      'Switch each pair of piles, in place. First move the left pile to ' +
          'the right, winding up the stack. Then move all crates to the left ' +
          'slot. Finally, unwind the stack moving a crate to the right each ' +
          'time.\n\nThe shortest known solution uses 17 registers.'
  ),
  'Palette Swap': new cn.LevelData(
      2,
      [29, 18, 15],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'red', 'none',
        'any'],
      [[], ['red', 'blue'], ['blue', 'red', 'blue', 'red'], ['blue', 'red'],
        ['blue', 'red', 'blue', 'red'], [],
        ['blue', 'red', 'blue', 'red', 'blue', 'red'], []],
      [[], ['blue', 'red'], ['red', 'blue', 'red', 'blue'], ['red', 'blue'],
        ['red', 'blue', 'red', 'blue'], [],
        ['red', 'blue', 'red', 'blue', 'red', 'blue'], []],
      'Go left and go right. Each time you do so, wind up the stack. When no ' +
          'more crates are left, unwind the stack going left and going ' +
          'right. Repeat. \n\nThe shortest known solution uses 15 registers.'
  ),
  'Mirror 2': new cn.LevelData(
      1,
      [20, 15, 12],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'yellow', 'none'],
      [['yellow', 'yellow', 'yellow'], ['yellow', 'yellow'], ['yellow'], []],
      [[], ['yellow'], ['yellow', 'yellow'], ['yellow', 'yellow', 'yellow']],
      'Move the top crate of the 2nd pile one slot to the right, and bring ' +
          'the left pile all the way to the right.\n\nThe shortest known ' +
          'solution uses 12 registers.'
  ),
  'Changing Places 2': new cn.LevelData(
      1,
      [25, 19, 16],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'none'],
      [['red'], ['red', 'red', 'red'], ['red'],
        ['red', 'red', 'red', 'red', 'red'], [], ['red', 'red'],
        ['red', 'red', 'red', 'red'], ['red', 'red', 'red']],
      [['red', 'red', 'red'], ['red'], ['red', 'red', 'red', 'red', 'red'], [],
        ['red', 'red'], ['red', 'red', 'red', 'red'], ['red', 'red', 'red'],
        ['red']],
      'As in Changing Places, swap piles. Do that once for each pair of ' +
          'consecutive piles and you\'re done.\n\nThe shortest known ' +
          'solution uses 16 registers.'
  ),
  'Vertical Sort': new cn.LevelData(
      2,
      [29, 29, 20],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'green',
        'none', 'any'],
      [[], ['green', 'blue', 'green', 'blue', 'blue'],
        ['blue', 'green', 'blue'], ['green', 'blue', 'blue', 'green'],
        ['blue', 'green'], ['blue', 'green', 'green', 'green', 'blue'], []],
      [[], ['green', 'green', 'blue', 'blue', 'blue'],
        ['green', 'blue', 'blue'], ['green', 'green', 'blue', 'blue'],
        ['green', 'blue'], ['green', 'green', 'green', 'blue', 'blue'], []],
      'Draw on ideas from previous sort levels.'
  ),
  'Count in Binary': new cn.LevelData(
      1,
      [29, 23, 17],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'green', 'none'],
      [['green', 'green', 'green', 'green', 'green', 'green'], [], [], [], [],
        [], []],
      [['green', 'green'], [], ['green'], ['green'], ['green'], [], ['green']],
      'Count up all the numbers in binary: 1, 10, 11, 100,...'
  ),
  'Equalizer': new cn.LevelData(
      1,
      [40, 40, 40],
      [10, 10, 10, 10, 6],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'f4', 'blue', 'red',
        'none', 'any'],
      [[], ['blue', 'blue'], ['blue'], ['blue', 'blue', 'blue', 'blue', 'blue'],
        [], ['blue', 'blue'], ['blue', 'blue', 'blue', 'blue'], ['red']],
      [['blue', 'blue'], ['blue', 'blue'], ['blue', 'blue'], ['blue', 'blue'],
        ['blue', 'blue'], ['blue', 'blue'], ['blue', 'blue'], ['red']],
      ''
  ),
  'Parting the Sea': new cn.LevelData(
      1,
      [17, 17, 17],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'blue', 'none'],
      [[], ['blue', 'blue'], ['blue', 'blue'], ['blue', 'blue'],
        ['blue', 'blue'], ['blue', 'blue'], []],
      [['blue', 'blue', 'blue', 'blue', 'blue'], [], [], [], [], [],
        ['blue', 'blue', 'blue', 'blue', 'blue']],
      ''
  ),
  'The Trick': new cn.LevelData(
      2,
      [20, 14, 11],
      [8, 8, 8, 5],
      ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red', 'yellow',
        'none', 'any'],
      [['yellow', 'red'], [], ['red', 'yellow']],
      [['red', 'yellow'], [], ['yellow', 'red']],
      'Bring the right pile to the middle, then the left pile to the middle. ' +
          'Finally unmerge the piles to their respective sides. \n\nThe ' +
          'shortest known solution uses 11 registers.'
  )
};
