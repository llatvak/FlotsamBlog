package fi.tuni.server.category;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * Entity that holds category information.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    @NotBlank
    private String title;

    public Category(String title) {
        this.title = title;
    }

    public Category() {

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getId() {
        return id;
    }
    
    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", title='" + title + '\''+
                '}';
    }
}