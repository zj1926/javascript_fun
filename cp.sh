im6_dir="../im6.github.io"

if [ ! -d "$im6_dir" ]; then
  echo 'GitHub Page folder does not exist.'
  exit 1
fi

# copy
# cp dist/public/main.js "$im6_dir/assets/"
# cp dist/public/site.js "$im6_dir/assets/"

cp assets/CNAME $im6_dir
cp assets/robots.txt $im6_dir
cp assets/sitemap.xml $im6_dir

cp -a dist/views/. $im6_dir

# push
cd $im6_dir
git add .
git commit -a -m "update"
git push
exit 0