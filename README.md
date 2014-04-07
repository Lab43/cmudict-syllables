This little app uses the [CMU Pronouncing Dictionary](http://www.speech.cs.cmu.edu/cgi-bin/cmudict) to build a list of words and their syllable counts. It's inspired by [this article](http://www.onebloke.com/2011/06/counting-syllables-accurately-in-python-on-google-app-engine/).

1. Download the latest CMUDICT file (currently [cmudict.0.7a](http://svn.code.sf.net/p/cmusphinx/code/trunk/cmudict/cmudict.0.7a))
2. Place this file in this app's root directory and rename it to "cmudict.txt"
3. Run `node app`
4. This will output a table of words and syllable counts to cmudict-syllables.csv
