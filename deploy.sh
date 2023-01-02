# delete existing index.html
rm ./index.html

# delete existing assets folder
rm -rf ./assets

# from: ~/personal-website root of project

cd ./src

# builds content of the dist folder
npm run build

# cd back to parent 
cd ..

# copy contents of dist folder to root of project
cp -r ./src/dist/* ./

# specific copy of resume
cp ./src/assets/Jason_Aricheta_Resume.pdf ./assets 

# git add
git add -A

# git commit
git commit -m "deploy"

# git push
# git push