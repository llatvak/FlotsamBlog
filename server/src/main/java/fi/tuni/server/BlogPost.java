package fi.tuni.server;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class BlogPost {

    @Id
    @GeneratedValue

    private int id;
    private String title;
    private String description;
    private String image;
    private String imageText;
    private String category;

    public BlogPost(String title, String description, String image, String imageText, String category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.imageText = imageText;
        this.category = category;
    }

    public BlogPost() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getImageText() {
        return imageText;
    }

    public void setImageText(String imageText) {
        this.imageText = imageText;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "BlogPost{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", imageText='" + imageText + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}
