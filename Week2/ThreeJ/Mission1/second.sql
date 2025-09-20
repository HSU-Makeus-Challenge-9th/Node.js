/*
    필요한 정보(받을 정보들) : writer_id, store_id, content, score

    설명 : 리뷰 작성이라고 적혀있어서, 도저히 select문이 아닌 insert문을 사용해야 할 것 같아서 그렇게 작성했습니다.
*/

insert into store_reviews (writer_id, store_id, content, score, created_at, updated_at)
values (?, ?, ?, ?, NOW(), NOW());