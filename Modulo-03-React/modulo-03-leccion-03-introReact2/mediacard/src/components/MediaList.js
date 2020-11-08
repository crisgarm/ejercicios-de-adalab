import React from "react";
import MediaCard from "./MediaCard";

class MediaList extends React.Component {
  render() {
    return (
      <section>
        <ul>
          <li className="list-items">
            <MediaCard
              name="Cristina García"
              date=" Domingo 01 de noviembre de 2020"
              content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quo
              ducimus facilis libero, natus maxime dolorem voluptatem officiis.
              Fugit laudantium sed architecto commodi eum quae maiores corrupti
              recusandae consequuntur necessitatibus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cumque dignissimos saepe molestiae
              quidem provident voluptates sunt ea natus alias rem? Perspiciatis,
              dolorem! At in omnis animi similique fugit eius doloribus."
              likes="37"
            />
          </li>
          <li className="list-items">
            <MediaCard
              name="Víctor Álvarez"
              date="Sábado 24 de octubre de 2020"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              likes="37"
            />
          </li>
          <li className="list-items">
            <MediaCard
              name="María Romero"
              date="Miércoles 02 de septiembre de 2020"
              content="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
              likes="37"
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default MediaList;
