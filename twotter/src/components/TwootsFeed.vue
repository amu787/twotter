<template>
    <div class="twoot-item">
        <div class="user-profile__twoot">
            <div class="twoot-item__user">
                @{{ username }}
            </div>
            <div class="twoot_item__content">
                {{ twoot.content }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TwootsFeed",
    props: {
        username: { type: String, required: true },
        twoot: { type: Object, required: true }
    }
}
</script>

<style lang="scss" scoped>
.twoot-item {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;
    overflow: auto;
    overflow-wrap: break-word;
    
    &:hover {
        transform: scale(1.1, 1.1);
    }

    .twoot-item__user {
        font-weight: bold;
    }

    // .user-profile__twoot {
    //     .twoot_item__content{
    //         overflow-wrap:break-word;
    //     }
    // }
}

</style>