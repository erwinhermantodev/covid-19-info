import React, { Component } from 'react';
import './index.css';
import { List } from 'antd';

const data = [
    {
      title: '1. Mencuci tangan dengan benar',
      image: 'https://cdn2.tstatic.net/tribunnews/foto/bank/images/mencuci-tangan1.jpg',
    },
    {
      title: '2. Menggunakan masker',
      image: 'https://cms.sehatq.com/public/img/article_img/sisi-berwarna-hijau-atau-putih-bagaimana-cara-pakai-masker-yang-benar-1576202605.jpg',
    },
    {
      title: '3. Menjaga daya tahan tubuh',
      image: 'https://asset.winnetnews.com/image/cache/slide/post/image-inilah-cara-mudah-untuk-menjaga-daya-tahan-tubuh.jpg',
    },
    {
      title: '4. Tidak pergi ke negara terjangkit',
      image: 'https://awsimages.detik.net.id/visual/2020/01/30/2271bd80-d289-4b88-96d5-bc6b8e5456ad.png?w=650',
    },
    {
      title: '5. Menghindari kontak dengan hewan yang berpotensi menularkan coronavirus',
      image: 'https://awsimages.detik.net.id/community/media/visual/2020/03/14/12ba0d27-c601-4072-828b-f0e929db6d85_169.jpeg?w=700&q=90',
    },
  ];


class Tips extends Component {

        render() {
            return (
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item
                        extra={
                            <img
                            width={272}
                            alt="logo"
                            src={item.image}
                            />
                        }
                    >
                        <List.Item.Meta
                        title={<a href="https://ant.design">{item.title}</a>}
                        />
                    </List.Item>
                    )}
                />
            );
        }
}

export default Tips;
