UPDATE wp_options SET option_value = REPLACE(option_value, 'http://blog.1-mok.ru', 'https://test.1-mok.ru') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE wp_posts SET guid = REPLACE(guid, 'http://blog.1-mok.ru','https://test.1-mok.ru');
UPDATE wp_posts SET post_content = REPLACE(post_content, 'http://blog.1-mok.ru', 'https://test.1-mok.ru');