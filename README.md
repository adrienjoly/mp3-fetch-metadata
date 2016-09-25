# mp3-fetch-metadata

Script that identifies track title and artist from a list of MP3 files, thanks to audio fingerprinting.

## Usage

`./fetch-metadata.sh` identifies and prints the track title and artist of each mp3 file found recursively from the current directory.

## Dependencies

- [Node.js](https://nodejs.org)
- [fpcalc](http://acoustid.org/chromaprint) command-line tool, used by [acoustid](https://www.npmjs.com/package/acoustid) for fingerprinting

Don't forget to run `npm install` before usage.

## Sample output

This script was successfully tested on Mac OS 10.11.6 (El Capitan) in September 2016.

This is an sample from the standard output, after running `./fetch-metadata.sh` from a directory containing MP3 files:

```
./rock/Lenny Kravitz - Always On The Run.mp3 => {"title":"Always on the Run","artist":"Lenny Kravitz"}
./rock/Agua Verde (Ft. Kathleen Delano, Kurt Travis, & Gavin Mulkey) - Strawberry Girls.mp3 => {"title":"Agua Verde","artist":"Strawberry Girls"}
./rock/Desmond Myers - Good Morning Portugal.mp3 => {"error":"No metadata was returned for this track."}
./rock/Title Fight - 'Numb, But I Still Feel It'.mp3 => {"title":"Numb, but I Still Feel It","artist":"Title Fight"}
./rock/Throwing Muses • Shimmer • 1995.mp3 => {"title":"Shimmer","artist":"Throwing Muses"}
./rock/FAILURE - ENJOY THE SILENCE -[[ COVERStoDM ]]-.mp3 => {"title":"Enjoy the Silence","artist":"Failure"}
```
