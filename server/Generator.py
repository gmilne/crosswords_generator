import copy
from PrefixTree import PrefixTree


class Generator:
    def __init__(self, *args, **kwargs):
        self.words = []
        self.crossword = []
        self.search_state = {"crossword": [], "x": 0, "y": 0, "word_index": 0}
        self.height = kwargs['height'] if 'height' in kwargs else 0
        self.width = kwargs['width'] if 'width' in kwargs else 0
        self.void_space_indicator = "#@"
        return

    def init_crossword(self):
        if self.height < 1 or self.width < 1:
            print("Insufficient crossword dimensions")
            exit(1)
        self.crossword = [
            ['' for i in range(self.width)] for j in range(self.height)]
        return

    def init_words_from_file(self, words=[], filename=''):
        if filename == '':
            print("Must supply word list source file")
            exit(1)
        with open(filename, 'r') as dictionary_file:
            for line in dictionary_file:
                self.words.append(line.replace("\n", ""))
        return

    def init_words(self, words):
        self.words = words
        return

    def build_prefix_tree(self):
        self.dictionary = PrefixTree(word_list=self.words)
        self.dictionary.build()
        return

    def generate(self):
        word_index = 10
        complete = False
        x = 0
        y = 0
        while not complete:
            # Start Case
            if x == 0 and y == 0:
                word = self.words[word_index]
                self.update_search_state(x, y, word_index)
                self.insert_word(word, x, y, "x")
                y += 1
            # No Possible Next word
            elif word_index >= len(self.words):
                self.crossword = copy.deepcopy(self.search_state['crossword'])
                x = self.search_state['x']
                y = self.search_state['y']
                word_index = self.search_state['word_index']
            # Run Case
            elif y < self.height:
                word = self.words[word_index]
                if self.validate_horizontal_word(word, x, y):
                    self.update_search_state(x, y, word_index)
                    self.insert_word(word, x, y, "x")
                    y += 1
            else:
                complete = True
            word_index += 1
        return

    def update_search_state(self, x, y, word_index):
        self.print_crossword()
        self.search_state = {
            "crossword": copy.deepcopy(self.crossword),
            "x": x,
            "y": y,
            "word_index": word_index
        }
        return

    def insert_word(self, word, x, y, axis):
        if word[0] != self.crossword[y][x] and self.crossword[y][x] != '':
            print(
                f"ERROR - GEN01 - Incorrect Starting Character: {word[0]} | {self.crossword[y][x]} mismatch")
            self.print_crossword()
            print(word, x, y, axis)
            exit(1)
        if axis == "x" and len(word) < self.width:
            for i, letter in enumerate(word):
                self.crossword[y][x+i] = letter
        elif axis == "y" and len(word) < self.height:
            for i, letter in enumerate(word):
                self.crossword[y+i][x] = letter
        return

    def validate_horizontal_word(self, word, x, y):
        for i, letter in enumerate(word):
            prefix = letter + self.get_vertical_prefix(x+i, y)
            if not self.dictionary.find_prefix(prefix):
                return False
        return True

    def get_vertical_prefix(self, x, y):
        prefix = ""
        while y >= 0 and self.crossword[y-1][x] != '':
            prefix += self.crossword[y-1][x]
            y -= 1
        return prefix

    def print_crossword(self):
        for row in self.crossword:
            print(row)
        print("\n")
        return

    def prune_word_list_to_length(self, min_length, max_length):
        tmp = []
        for word in self.words:
            if len(word) <= max_length and len(word) >= min_length:
                tmp.append(word)
        self.words = tmp
        return


g = Generator(height=5, width=5)
g.init_words_from_file(
    filename="D:\\Crosswords\\crosswords_generator\\wordList.txt")
g.prune_word_list_to_length(3, 5)
g.build_prefix_tree()
g.init_crossword()
g.generate()
g.print_crossword()
