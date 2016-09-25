# for each mp3 file found recursively in this directory, identify the track title and artist.
# uses fetch-metadata.js (based on chromaprint/fpcalc for metadata fingerprinting, and acoustid for metadata).

find . -name '*.mp3' -print0 | while read -d $'\0' file
do
	echo $file "=>" $(node ./fetch-metadata.js "$file")
done;
