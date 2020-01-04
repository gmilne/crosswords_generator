class PrefixTree:
    def __init__(self, *args, **kwargs):
        self.tree = {}
        self.word_list = kwargs['word_list'] if 'word_list' in kwargs else []
        self.stop_symbol = "!#"

    def build(self):
        for word in self.word_list:
            self.upsert_branch(word, self.tree)
            pass

    def upsert_branch(self, word, branch):
        if len(word) == 0:
            branch[self.stop_symbol] = {}
            return
        if word[0] not in branch:
            branch[word[0]] = {}
        self.upsert_branch(word[1:], branch[word[0]])

    def find_word(self, word, branch):
        print(word)
        if len(word) == 0 and self.stop_symbol in branch:
            return True
        if len(word) == 0:
            return False
        if word[0] not in branch:
            return False
        return self.find_word(word[1:], branch[word[0]])

    def _find_prefix(self, prefix, branch):
        if len(prefix) == 0:
            return True
        if prefix[0] not in branch:
            return False
        return self._find_prefix(prefix[1:], branch[prefix[0]])

    def find_prefix(self, prefix):
        return self._find_prefix(prefix, self.tree)
