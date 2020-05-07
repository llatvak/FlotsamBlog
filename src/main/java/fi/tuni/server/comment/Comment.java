package fi.tuni.server.comment;

import org.hibernate.validator.constraints.Range;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Range(min = 1)
    private int postId;
    @NotNull
    @NotBlank
    private String author;
    @NotNull
    @NotBlank
    private String content;
    @NotNull
    @NotBlank
    private String date;
    @Range(min = 0)
    private int likes;

    public Comment(int postId, String author, String content, String date, int likes) {
        this.postId = postId;
        this.author = author;
        this.content = content;
        this.date = date;
        this.likes = likes;
    }

    public Comment() {

    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", postId='" + postId + '\'' +
                ", author='" + author + '\'' +
                ", content='" + content + '\'' +
                ", date='" + date + '\'' +
                ", likes='" + likes + '\'' +
                '}';
    }
    
}